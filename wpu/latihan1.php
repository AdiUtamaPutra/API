<?php 
	$mahasiswa = [
		[
			"nama"	=> "Jhonathan Spilberd",
			"nrp"	=> "9578348461",
			"email"	=> "Spilberd@gmail.com"
		],
		[
			"nama"	=> "Morgan Freeman",
			"nrp"	=> "48646516",
			"email"	=> "Freeman@gmail.com"
		],

	];

	$data = json_encode($mahasiswa);
	echo $data;

?>