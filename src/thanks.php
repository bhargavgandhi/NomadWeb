<?php

    if ($_POST['Submit']) {
        $Header = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $Header .= 'From: Nomad Portfolio <noreply@thenomadportfolio.com>' . "\r\n";
        $Header .=  "X-Mailer: php\r\n";
        $Header .= "MIME-Version: 1.0\r\n";
				$Header .= "Bcc: bg@realestatearts.com\r\n";
        ini_set('SMTP', "relay-hosting.secureserver.net");
        ini_set('smtp_port', "25");

        //mail($email, $subject, $message, $Header);

        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $msg   = $_POST['message'];

        $toAdmin = "bg@realestatearts.com";
        // $toAdmin = "dcohen@merprop.com, jvacker@merprop.com";

        $subject2 = "Nomad Portfolio Contact Form Entries";
        $message2 = "<div style='width: 500px;'>
							<h2> Nomad Portfolio Contact Form Entry Details </h2>
							<p> Name : " . $fname . " " . $lname . " </p>
							<p> Email : " . $email . " </p>
							<p> Phone : " . $phone . " </p>
							<p> Message : " . $msg . " </p>
						</div>
					";

        mail($toAdmin, $subject2, $message2, $Header);
    }

?>


<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
	<link rel="icon" type="image/png" href="favicon.png">
	<title>Thank You - Nomad</title>
	<meta name="author" content="The Nomad Portfolio">

	<link rel="stylesheet" href="assets/css/style.css" />

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

	<style>
		@media screen and (min-width: 1000px) {
			html,
			body,
			.container,
			.main-container,
			.main-container .row {
				height: 100%;
			}
		}
	</style>
</head>

<body class="contact animated">
	<div id="preloader" class="Hide"></div>
	<section class="container">
		<header class="closeHead">
			<div class="wrapper row animated2">
				<nav id="mainNav" class="navbar navbar-default homePageNav animated2" role="navigation">
					<div id="logo" class="navbar-header">
						<div id="nav-icon3" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<a href="index.html" class="navbar-brand leftBrand hidden-xs hidden-sm" style="cursor: pointer; z-index: 999999;">
							<img src="https://s3.amazonaws.com/reacdn/nomad/images/logo.svg" width="100%" alt="Nomad Logo" class="img-responsive" />
						</a>
					</div>
					<div class="navbar-collapse collapse animated2" id="bs-example-navbar-collapse-1" aria-expanded="false">
						<a href="index.html" class="navbar-brand leftBrand hidden-md hidden-lg" style="cursor: pointer; z-index: 9;">
							<img src="https://s3.amazonaws.com/reacdn/nomad/images/logo.svg" width="100%" alt="Nomad Logo" class="img-responsive" />
						</a>
						<ul class="nav navbar-nav">

							<li>
								<a href="index.html">HOME</a>
							</li>


							<li class="dropdown">
								<a href="portfolio.html" class="dropdown-toggle"  href="#" role="button" aria-haspopup="true" aria-expanded="false">
									PORTFOLIO
								</a>
								<ul class="dropdown-menu">
									<li>
										<a class="portfolio-icon" href="portfolio-12w-21st.html">
											12 W 21ST ST
										</a>
									</li>
									<li>
										<a class="portfolio-icon" href="portfolio-30w-26st.html">
											30 W 26TH ST
										</a>
									</li>
									<li>
										<a class="portfolio-icon" href="portfolio-12w-27st.html">
											12 W 27TH ST
										</a>
									</li>

									<li>
										<a class="portfolio-icon" href="portfolio-401-park-ave-s.html">
											401 PARK AVE S
										</a>
									</li>

									<li>
										<a class="portfolio-icon" href="portfolio-6e-32st.html">
											6 E 32ND ST
										</a>
									</li>

								</ul>
							</li>


							<li>
								<a href="availabilities.html">AVAILABILITIES</a>
							</li>



							<li class="dropdown">
								<a href="neighborhood.html" href="#" role="button" aria-haspopup="true" aria-expanded="false">
								NEIGHBORHOOD
							</a>
							<!-- <ul class="dropdown-menu">
								<li>
									<a href="#location-maps">
										LOCATION MAPS
									</a>
								</li>
							</ul> -->
							</li>
							<li>
								<a href="news.html">NEWS</a>
							</li>
							<li class="active">
								<a href="contact.html">CONTACT</a>
							</li>
						</ul>

						<footer class="animated2 hidden-md hidden-lg">
							<div>
								<div class="social-links">
									<ul>
										<li><a> <i class="fa fa-facebook"></i> </a></li>
										<li><a> <i class="fa fa-instagram"></i> </a></li>
										<li><a> <i class="fa fa-twitter"></i> </a></li>
										<li><a> <i class="fa fa-linkedin"></i> </a></li>
									</ul>
								</div>
							</div>
						</footer>
					</div>
				</nav>
				<div class="nav-search animated2">
					<img class="search-icon" src="https://s3.amazonaws.com/reacdn/nomad/images/search.svg" alt="search icon" width="100%" />
					<input type="text" name="search" id="search" />

					<!-- <img class="bar-icon" src="https://s3.amazonaws.com/reacdn/nomad/images/bar.svg" alt="bar icon" width="100%" />
					<img class="search-close-icon" src="https://s3.amazonaws.com/reacdn/nomad/images/close.svg" alt="search close icon" width="100%" /> -->
				</div>
				<a class="nav-toggle animated2">
				<img src="https://s3.amazonaws.com/reacdn/nomad/images/menu-toggle.svg" alt="menu toggle image" width="20" />
			</a>

				<footer class="animated2 hidden-xs hidden-sm">
					<div>
						<div class="social-links">
							<ul>
								<li><a> <i class="fa fa-facebook"></i> </a></li>
								<li><a> <i class="fa fa-instagram"></i> </a></li>
								<li><a> <i class="fa fa-twitter"></i> </a></li>
								<li><a> <i class="fa fa-linkedin"></i> </a></li>
							</ul>
						</div>
					</div>
				</footer>
			</div>

		</header>

		<div class="logo-secondary">
			<a href="index.html" class="navbar-brand leftBrand" style="cursor: pointer; z-index: 999999;">
				<img src="https://s3.amazonaws.com/reacdn/nomad/images/logo-black.svg" width="100%" alt="Nomad Logo" class="img-responsive" />
			</a>
		</div>


		<!-- Prev Page Nav Arrow -->
		<div class="prev-nav-main">
			<a href="news.html">
				<img src="https://s3.amazonaws.com/reacdn/nomad/images/arrow-left.svg" width="10px" alt="prev navigation" />
			</a>
		</div>

		<!-- Next Page Nav Arrow -->
		<!-- <div class="next-nav-main">
			<a href="index.html">
				<img src="https://s3.amazonaws.com/reacdn/nomad/images/arrow-right.svg" width="10px" alt="next navigation" />
			</a>
		</div> -->



		<section class="main-container">
			<section class="row">
				<div class="contact-block">
					<div class="col-xs-12 contact-form-block">
						<h2 class="green-text mob-big-text">
							JOIN NOMAD
						</h2>
						<div class="col-xs-12 col-md-6 contact-form-inner">
              <h3>
                THANK YOU
              </h3>
              <h4>
                  A representative will be in touch shortly.
              </h4>
						</div>
						<div class="col-xs-12 col-md-5 contact-content-block">
							<div class="contact-info">
								<h3>DAVID COHEN</h3>
								<h4>Vice President - Leasing</h4>
								<a href="mailto:dcohen@merprop.com"> dcohen@merprop.com </a>
							</div>
							<div class="contact-info">
								<h3>JASON VACKER</h3>
								<h4>President & CEO</h4>
								<a href="mailto:jvacker@merprop.com"> jvacker@merprop.com </a>
							</div>
							<div class="contact-info">
								<a href="tel:212.645.7575"> 212.645.7575 </a>
							</div>

							<footer class="contact-footer hidden-xs hidden-sm">
								<figure class="merginoff-logo">
									<img src="https://s3.amazonaws.com/reacdn/nomad/images/meringoff-properties-logo.svg" class="img-responsive" />
								</figure>

								<figure class="himmel-logo">
									<img src="https://s3.amazonaws.com/reacdn/nomad/images/himmel-meringoff-logo.svg" class="img-responsive" />
								</figure>

								<figure class="rebny-logo">
									<img src="https://s3.amazonaws.com/reacdn/nomad/images/rebny-logo.svg" class="img-responsive" />
								</figure>

								<div class="contact-copyrights">
									<p>
										© NoMad Portfolio 2018. All Rights Reserved.
									</p>
								</div>
								<div class="contact-footer-links">
									<ul>
										<li>
											<a href="">
													Privacy
											</a>
										</li>
										<li>
											<a href="">
													Legal
											</a>
										</li>
									</ul>
								</div>
							</footer>
						</div>
					</div>
				</div>
				<!-- Contact Form Ends -->
			</section>

			<footer class="contact-footer hidden-md hidden-lg">
				<figure class="merginoff-logo">
					<img src="https://s3.amazonaws.com/reacdn/nomad/images/meringoff-properties-logo.svg" class="img-responsive" />
				</figure>

				<figure class="himmel-logo">
					<img src="https://s3.amazonaws.com/reacdn/nomad/images/himmel-meringoff-logo.svg" class="img-responsive" />
				</figure>

				<figure class="rebny-logo">
					<img src="https://s3.amazonaws.com/reacdn/nomad/images/rebny-logo.svg" class="img-responsive" />
				</figure>

				<div class="contact-copyrights">
					<p>
						© NoMad Portfolio 2018. All Rights Reserved.
					</p>
				</div>
				<div class="contact-footer-links">
					<ul>
						<li>
							<a href="">
									Privacy
							</a>
						</li>
						<li>
							<a href="">
									Legal
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</section>
		<!-- End MainContainer -->
	</section>
	<!-- End Container -->

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="assets/js/main.min.js"></script>

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous">
	</script>


	<!-- <script>
		(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function() {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
			a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
		ga('create', 'UA-XXXXXXXX-1', 'auto');
		ga('send', 'pageview');
	</script> -->

	<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-113464807-1"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'UA-113464807-1');
</script>

</body>

</html>
