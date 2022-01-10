<?php

	$server = $_SERVER['HTTP_HOST'];
	$name = $_POST['name'];
	if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
	if (empty($phone))
	{
		echo "I can not send!";
		exit;
	}


	$whatFor  = 'None';
	if(isset($_POST['whatFor']) && is_array($_POST['whatFor']) && count($_POST['whatFor']) > 0){
			$whatFor = implode(', ', $_POST['whatFor']);
	}
	
	$legthofIvst  = 'None';
	if(isset($_POST['typlegthofIvsteof']) && is_array($_POST['legthofIvst']) && count($_POST['legthofIvst']) > 0){
			$legthofIvst = implode(', ', $_POST['legthofIvst']);
	}

	$typeofRent  = 'None';
	if(isset($_POST['typeofRent']) && is_array($_POST['typeofRent']) && count($_POST['typeofRent']) > 0){
			$typeofRent = implode(', ', $_POST['typeofRent']);
	}

	$amountofRent  = 'None';
	if(isset($_POST['amountofRent']) && is_array($_POST['amountofRent']) && count($_POST['amountofRent']) > 0){
			$numberof = implode(', ', $_POST['amountofRent']);
	}

	$percentofRent  = 'None';
	if(isset($_POST['percentofRent']) && is_array($_POST['percentofRent']) && count($_POST['percentofRent']) > 0){
			$percentofRent = implode(', ', $_POST['percentofRent']);
	}

	$placeofVacation  = 'None';
	if(isset($_POST['placeofVacation']) && is_array($_POST['placeofVacation']) && count($_POST['placeofVacation']) > 0){
			$placeofVacation = implode(', ', $_POST['placeofVacation']);
	}

	$typeofPlace  = 'None';
	if(isset($_POST['typeofPlace']) && is_array($_POST['typeofPlace']) && count($_POST['typeofPlace']) > 0){
			$typeofPlace = implode(', ', $_POST['typeofPlace']);
	}

	
	$areofPlace  = 'None';
	if(isset($_POST['areofPlace']) && is_array($_POST['areofPlace']) && count($_POST['areofPlace']) > 0){
			$areofPlace = implode(', ', $_POST['areofPlace']);
	}

	$numberofRoom  = 'None';
	if(isset($_POST['numberofRoom']) && is_array($_POST['numberofRoom']) && count($_POST['numberofRoom']) > 0){
			$numberofRoom = implode(', ', $_POST['numberofRoom']);
	}

	$constrofArea  = 'None';
	if(isset($_POST['constrofArea']) && is_array($_POST['constrofArea']) && count($_POST['constrofArea']) > 0){
			$constrofArea = implode(', ', $_POST['constrofArea']);
	}

	$typeofPayment  = 'None';
	if(isset($_POST['typeofPayment']) && is_array($_POST['typeofPayment']) && count($_POST['typeofPayment']) > 0){
			$typeofPayment = implode(', ', $_POST['typeofPayment']);
	}

	$budget  = 'None';
	if(isset($_POST['budget']) && is_array($_POST['budget']) && count($_POST['budget']) > 0){
			$budget = implode(', ', $_POST['budget']);
	}

	$whenSochi  = 'None';
	if(isset($_POST['whenSochi']) && is_array($_POST['whenSochi']) && count($_POST['whenSochi']) > 0){
			$whenSochi = implode(', ', $_POST['whenSochi']);
	}

	
	
	$success_url = 'index.html?succes'; 

	
	$mail_header = "MIME-Version: 1.0\r\n";
	$mail_header.= "Content-type: text/html; charset=UTF-8\r\n";
	$mail_header.= "From: Тема <informer@$server>\r\n";
	$mail_header.= "Reply-to: Reply to Name <reply@$server>\r\n";
	
	$to = "lid@sochi.estate"; //заменить почту на свою
	$subject = "Заявка с сайта: $server";
	
				$message = "<strong>Имя:</strong> $name<br><br> 
				<strong>Телефон:</strong> $phone<br><br> 
				<strong>Цель Покупки:</strong> $whatFor<br><br> 
				<strong>Сроки инвестирования:</strong> $legthofIvst<br><br> 
				<strong>Вид сдачи в Аренду:</strong> $typeofRent <br><br> 
				<strong>Сумма в год от аренды:</strong> $amountofRent <br><br> 
				<strong>Gроцент годовых от инвестиций:</strong> $percentofRent <br><br> 
				<strong>Место для отдыха:</strong> $placeofVacation<br><br> 
				<strong>Вид помещеня:</strong> $typeofPlace<br><br> 
				<strong>Желаемая площадь помещения:</strong> $areofPlace<br><br> 
				<strong>Количество комнат:</strong> $numberofRoom<br><br> 
				<strong>Этап готовности:</strong> $constrofArea<br><br> 
				<strong>Форма оплаты:</strong> $typeofPayment<br><br> 
				<strong>Приезд в Сочи:</strong> $whenSochi<br><br> 

				
	<br><strong>Время письма:</strong> ".date("d.m.Y H:i:s")."";
	if (mail($to,$subject,$message,$mail_header))
	header('Location: '. 'thanks.html');
	else echo 'Oshibka otpravki - otklyuchena funkciya (php mail). Obratites v podderzhku xostinga';


		?>