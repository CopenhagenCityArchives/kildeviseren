<?php
class KildeViserSEO {

	private $collectionId;
	private $itemId;
	private $collectionUrl;
	private $levelsUrl;
	private $dataUrl;

	private $templateName = 'crawl_template.html';

	public $Collection;
	public $Levels;
	public $Data;
	public $Items;
	public $Output;
	public $MetadataString;
	public $SiteURL;

	public function KildeViserSEO() {
		error_reporting(E_ALL);
		$input = $this->getURLParameters();
		if (isset($input['collection']) && isset($input['item'])) {
			$this->collectionId = $input['collection'];
			$this->itemId = $input['item'];

			$this->collectionUrl = "http://www.kbhkilder.dk/api/collections/" . $this->collectionId;
			$this->levelsUrl = "http://www.kbhkilder.dk/api/levels/" . $this->collectionId;
			$this->dataUrl = "http://www.kbhkilder.dk/api/data/" . $this->collectionId . "?id=" . $this->itemId;

			$this->_fetchJSONData();
			$this->_buildOutput();
			$this->_createMetadataString();
			$this->_createItemURLs();
			$this->_createSiteURL();
			$this->_buildSearchURL();
			$this->_createTemplate();
		}
	}

	private function getURLParameters() {
		//The only input should be the url string. The loop will only iterate through one entry
		//  foreach($_GET as $key => $value){
		$key = $_SERVER['QUERY_STRING'];
		//Expected input: ?collection=3&item=2232
		$queryString = rawurldecode($key);
		$inputs = explode('&', $queryString);
		$inputs[0] = str_replace('?', '', $inputs[0]);
		$info = array();

		foreach ($inputs as $cur) {
			$parts = explode('=', $cur);
			$info[$parts[0]] = $parts[1];
		}

		return $info;
		//  }
	}

	private function _fetchJSONData() {
		$this->Collection = $this->_getData($this->collectionUrl, $this->Collection);
		$this->Collection = $this->Collection[0];
		$this->Levels = $this->_getData($this->levelsUrl, $this->Levels);
		$this->Data = $this->_getData($this->dataUrl, $this->Data);
		$this->Data = $this->Data[0];

		$this->Items = $this->_getData($this->_buildSearchURL(), $this->Items);

		//Special treatment of tiled images
		if ($this->Collection['image_type'] != 'image') {
			$this->Data['images'][0] = str_replace('_files/', '_thumb.jpg', $this->Data['images'][0]);
		}
	}

	private function _buildOutput() {
		$temp = array();
		$i = 0;
		//building name:value pairs for data not hidden. If name is hidden it is set to blank
		foreach ($this->Levels as $level) {
			if (!$level['gui_hide_value']) {
				if ($level['gui_hide_name'] == false) {
					$temp[$i]['name'] = $level['gui_name'];
				} else {
					$temp[$i]['name'] = false;
				}

				$temp[$i]['value'] = $this->Data['metadata'][$level['name']];
			}
			$i++;

		}

		$this->Output = $temp;
	}

	private function _createMetadataString() {
		$string = '';
		foreach ($this->Output as $curLevel) {
			$string = $curLevel['name'] ? $string . ' ' . $curLevel['name'] . ': ' . $curLevel['value'] : $string . ' ' . $curLevel['value'];
		}

		$this->MetadataString = trim($string);
	}

	private function _createSiteURL() {
		$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

		$url = rawurldecode($url);
		$url = str_replace('?_escaped_fragment_=', '#!', $url);

		$this->SiteURL = $url;
	}

	private function _createItemURLs() {
		foreach ($this->Items as $key => $item) {
			$this->Items[$key]['url'] = "http://$_SERVER[HTTP_HOST]/kildeviser/#!?collection=" . $this->collectionId . '&item=' . $item['id'];
		}
	}

	private function _getData($url, $data) {
		//Get JSON data from server
		// This will remove unwanted characters.

		$content = file_get_contents($url);

		// Check http://www.php.net/chr for details
		for ($i = 0; $i <= 31; ++$i) {
			$content = str_replace(chr($i), "", $content);
		}
		$content = str_replace(chr(127), "", $content);

		// This is the most common part
		// Some file begins with 'efbbbf' to mark the beginning of the file. (binary level)
		// here we detect it and we remove it, basically it's the first 3 characters
		if (0 === strpos(bin2hex($content), 'efbbbf')) {
			$content = substr($content, 3);
		}

		$data = json_decode($content, true);

		//Returning data
		return $data;
	}

	//Building a search for similar items based on already loaded filters and data
	private function _buildSearchURL() {
		$searchUrl = 'http://www.kbhkilder.dk/api/data/' . $this->collectionId . '/?';
		$parameters = '';
		foreach ($this->Levels as $level) {
			if ($level['searchable'] && isset($this->Data['metadata'][$level['name']])) {
				$parameters = $parameters . $level['name'] . '=' . urlencode($this->Data['metadata'][$level['name']]) . '&';
			}
		}
		return $searchUrl . $parameters;
	}

	private function _createTemplate() {
		require $this->templateName;
	}
}

$new = new KildeViserSEO();
?>
