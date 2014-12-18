<?php
    class KildeViserSEO
    {

        private $collectionId;
        private $itemId;
        private $collectionUrl;
        private $levelsUrl;
        private $dataUrl;

        private $templateName = 'crawl_template.html';

        public $Collection;
        public $Levels;
        public $Data;
        public $Output;
        public $MetadataString;
        public $SiteURL;

        public function KildeViserSEO(){
            error_reporting(E_ALL);
            $input = $this->getURLParameters();
            if(isset($input['collection']) && isset($input['item'])){
                $this->collectionId = $input['collection'];
                $this->itemId = $input['item'];

                $this->collectionUrl = "http://www.kbhkilder.dk/api/collections/" . $this->collectionId;
                $this->levelsUrl = "http://www.kbhkilder.dk/api/levels/" . $this->collectionId;
                $this->dataUrl = "http://www.kbhkilder.dk/api/data/" . $this->collectionId . "?id=" . $this->itemId;

                $this->_fetchJSONData();
                $this->_buildOutput();
                $this->_createMetadataString();
                $this->_createSiteURL();
                $this->_createTemplate();
            }
        }

        private function getURLParameters(){
            //The only input should be the url string. The loop will only iterate through one entry
            foreach($_GET as $key => $value){
                //Expected input: ?collection=3&item=2232
                $queryString = rawurldecode($key);
                $inputs = explode('&', $queryString);
                $inputs[0] = str_replace('?', '', $inputs[0]);
                $info = array();
                foreach($inputs as $cur){
                    $parts = explode('=', $cur);
                    $info[$parts[0]] = $parts[1];
                }

                return $info;
            }
        }

        private function _fetchJSONData(){
            $this->Collection = $this->_getData($this->collectionUrl, $this->Collection);
            $this->Collection = $this->Collection[0];
            $this->Levels = $this->_getData($this->levelsUrl, $this->Levels);
            $this->Data = $this->_getData($this->dataUrl, $this->Data);
            $this->Data = $this->Data[0];

            //Special treatment of tiled images
            if($this->Collection['image_type'] != 'image' ){
                $this->Data['images'][0] = str_replace('_files/', '.jpg', $this->Data['images'][0]);
            }
        }

        private function _buildOutput(){
            $temp = array();
            $i = 0;
            //building name:value pairs for data not hidden. If name is hidden it is set to blank
            foreach($this->Levels as $level){
                if(!$level['gui_hide_value']){
                    if($level['gui_hide_name'] == false){
                        $temp[$i]['name'] = $level['gui_name'];
                    }
                    else{
                        $temp[$i]['name'] = false;
                    }

                    $temp[$i]['value'] = $this->Data['metadata'][$level['name']];
                }
                $i++;

            }

            $this->Output = $temp;
        }

        private function _createMetadataString(){
            $string = '';
            foreach($this->Output as $curLevel){
                $string = $curLevel['name'] ? $string . ' ' . $curLevel['name'] . ': ' . $curLevel['value'] : $string . ' ' . $curLevel['value'];
            }

            $this->MetadataString = trim($string);
        }

        private function _createSiteURL(){
            $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

            $url = rawurldecode($url);
            $url = str_replace('?_escaped_fragment_=', '#!', $url);

            $this->SiteURL = $url;
        }

        private function _getData($url, $data){
            //Get JSON data from server
            $json = file_get_contents($url);

            //Decode data into an array
            $data = json_decode($json, true);

            //test
            //var_dump(json_decode($json));

            //Returning data
            return $data;
        }

        private function _createTemplate(){
            require($this->templateName);
        }
    }

    $new = new KildeViserSEO();
?>
