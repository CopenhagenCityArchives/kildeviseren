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

        public function KildeViserSEO(){
            error_reporting(E_ALL);

            if(isset($_GET['collection']) && isset($_GET['item'])){
                $this->collectionId = $_GET['collection'];
                $this->itemId = $_GET['item'];

                $this->collectionUrl = "http://www.kbhkilder.dk/api/collections/" . $this->collectionId;
                $this->levelsUrl = "http://www.kbhkilder.dk/api/levels/" . $this->collectionId;
                $this->dataUrl = "http://www.kbhkilder.dk/api/data/" . $this->collectionId . "?id=" . $this->itemId;

                $this->_fetchJSONData();
                $this->_buildOutput();
                $this->_createTemplate();
            }
        }

        private function _fetchJSONData(){
            $this->Collection = $this->_getData($this->collectionUrl, $this->Collection);
            $this->Collection = $this->Collection[0];
            $this->Levels = $this->_getData($this->levelsUrl, $this->Levels);
            $this->Data = $this->_getData($this->dataUrl, $this->Data);
            $this->Data = $this->Data[0];
        }

        private function _buildOutput(){
            $temp = array();
            $i = 0;
            //building name:value pairs for data not hidden. If name is hidden it is set to blank
            foreach($this->Levels as $level){
                if($level['gui_hide_name'] == false){
                    $temp[$i]['name'] = $level['gui_name'];
                }
                else{
                    $temp[$i]['name'] = false;
                }

                $temp[$i]['value'] = $this->Data['metadata'][$level['name']];
                $i++;
            }

            $this->Output = $temp;
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
