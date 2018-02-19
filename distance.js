function main() {
	var counter = 0,
		spanActiveText = "Write a response..."
		message = " ",
		previous = 0;
	$(".nested").hide();
	$(".hidden").hide();
	$(".rainconvo").delay(1000).show(0);
	$(".rainconvo").on("click", function() {
		$(".main").hide();
		$(".rainconvo").hide();
		$("#rainconvo").show();
		$(".invite").delay(1000).show(0);
	});
	$(".invite").on("click", function() {
		$(".main").hide();
		$(".invite").hide();
		$("#event-feed").show();
	});
	$(".event").on("click", function() {
		$(".main").hide();
		$(".invite").hide();
		$("#event-feed").show();
	});
	$(".coffincase").on("click", function() {
		$(".main").hide();
		$("#coffincase").show();
	});
	$("#friends").on("click", function() {
		$(".main").hide();
		$(".friends-feed").show();
	});
	$("#friends2").on("click", function() {
		$(".main").hide();
		$("#friends-feed-2").show();
	});
	$("#breezeprofile").on("click", function() {
		$(".main").hide();
		$("#profilebreeze").show();
	});
	$(".breeze").on("click", function() {
		$(".main").hide();
		$("#breezeconvo").show();
	});
	$(".button").on("click", function() {
		$(this).next().slideToggle(400);
	});
	$(".see-more").on("click", function() {
		$(this).hide();
		$(this).next().slideToggle(400);
	});
	$("#go-to").on("click", function() {
		$(".main").hide();
		alert("A week later.");
		$("#friends-feed-2").show();
		$(".event").hide();
		$(".event2").show();
		$("#friends").hide();
		$("#friends2").show();
	});
	$("button.switch").on("click", function() {
		var buttID = $(this).attr("id"),
			whichStory = $(this).parent().attr("id"),
			spanActiveNum = $(this).prevAll("span.active").attr("id");
		if(buttID == "stop" && counter != 0 && $(this).prevAll("span.active").next().attr("class") == "switch hidden") {
			message = message + " " + spanActiveText;
			previous = counter;
			$(this).prevAll("span.active").next("span").addClass("next");
			$(this).prevAll("span.active").removeClass("active");
			$(this).prevAll("span.next").show();
			$(this).prevAll("span.next").addClass("active");
			$(this).prevAll("span.next").removeClass("hidden");
			$(this).prevAll("span.next").removeClass("next");
			counter = 0;
			spanActiveText = "Write a response...";
		} else if(buttID == "stop" && counter != 0) {
			message = message + " " + spanActiveText;
			$(this).prevAll("span.active").removeClass("active");
			$(this).parents("div.field").hide();
			$(this).parents("div.field").next(".hidden").children("#response").html("<div class='small yellow'> </div> <span class='name'>You:</span>" + message + "</p>");
			message = " ";
			$(this).parents("div.field").next(".hidden").fadeIn();
			counter = 0;
		} else {
			counter++;
			if(counter > 3) {
				counter = 1;
			};
			switch(whichStory + "-" + spanActiveNum + "-" + counter) {
			/*Setup
				case "0-0-0":
					spanActiveText = "testing one";
					$(this).parents("div.field").next(".hidden").children("#r0").html("<div class='small red'> </div> <span class='name'>Fire:</span> text");
					break;
				case "0-0-0":
					if(previous == 0) {
						spanActiveText = "testing one";
						$(this).parents("div.field").next(".hidden").children("#r0").html("<div class='small red'> </div> <span class='name'>Fire:</span> text");	
					} else {
						spanActiveText = "testing one";
						$(this).parents("div.field").next(".hidden").children("#r0").html("<div class='small red'> </div> <span class='name'>Fire:</span> text");
					}
					break;
			*/
				case "1-1-1":
					spanActiveText = "You know what, Tempest? Shut the fuck up.";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small red'> </div> <span class='name'>Fire:</span> hell yeah! I am so here for this roast!");
					break;
				case "1-1-2":
					spanActiveText = "It's okay, Leaf. Leave her be. She just... has some things.";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small green'> </div> <span class='name'>Leaf:</span> If you say so...");
					break;
				case "1-1-3":
					spanActiveText = "Tempy's right. I feel pretty good about my finals but it's not like I got any grades back or anything.";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small lightblue'> </div> <span class='name'>Rain:</span> I'm sure you did wonderfully! I was in class with you, you obviously know what you're talking about.");
					break;
				case "1-2-1":
					if(previous == 1) {
						spanActiveText = "You seriously need to change your attitude.";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small gray'> </div> <span class='name'>Tempest:</span> Jeez.... i was jk... But now I'm kinda mad. That came out of left field and you need to start airing your grievances like an adult instead of blowing up like a big baby. I can't believe Breeze bothers with you.");
					} else {
						spanActiveText = "That's kind of a bummer.";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small red'> </div> <span class='name'>Fire:</span> I don't understand why u put up with that bitch.");
					}
					break;
				case "1-2-2":
					if(previous == 2) {
						spanActiveText = "Don't we all?";
						$(this).parents("div.field").next(".hidden").children("#r0").html("<div class='small blue'> </div> <span class='name'>River:</span> You can say that again");	
					} else {
						spanActiveText = "I'm sure everything will work out. Somehow it always does.";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small teal'> </div> <span class='name'>Brook:</span> in wicca we call that the law of threefold");
					}
					break;
				case "1-2-3":
					if(previous == 3) {
						spanActiveText = "I probably did really badly...";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small lightgreen'> </div> <span class='name'>Breeze:</span> be kind to yourself, querida.");	
					} else {
						spanActiveText = "I know I did well, and that's what matters.";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small red'> </div> <span class='name'>Fire:</span> Confidence is hot~");
					}
					break;
				case "2-1-1":
					spanActiveText = "This is my  a e s t h e t i c.";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small red'> </div> <span class='name'>Fire:</span> I had u more pegged for scene, Sunny. Like... glitter shit.");
					break;
				case "2-1-2":
					spanActiveText = "Yuck, creepy.";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small teal'> </div> <span class='name'>Brook:</span> u don't appreciate its utter beauty!!");
					break;
				case "2-1-3":
					spanActiveText = "siiiiiiiiick.";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small blue'> </div> <span class='name'>River:</span> Thats what I said when we got it.");
					break;
				case "2-2-1":
					if(previous == 1) {
						spanActiveText = "I just HAVE to take this home!! Not sure how to GET it home, though, in my little car...";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small lightblue'> </div> <span class='name'>Rain:</span> there's no-one else I'd rather give it to! Doesn't Breeze have a truck? I figured you'd be coming together anyway.");
					} else {
						spanActiveText = "I just don't think I have room for it!";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small lightblue'> </div> <span class='name'>Rain:</span> That's a bummer :(");
					}
					break;
				case "2-2-2":
					if(previous == 2) {
						spanActiveText = "Good luck getting rid of THAT.";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small lightblue'> </div> <span class='name'>Rain:</span> wow, RUDE. Has Tempest been rubbing off on you?");	
					} else {
						spanActiveText = "I kinda want it. Not sure how I would get it home, though.";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small red'> </div> <span class='name'>Fire:</span> Breeze has a truck u big goof, just ask him. I doubt he'd turn YOU down.");
					}
					break;
				case "2-2-3":
					if(previous == 3) {
						spanActiveText = "I'll take it!";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small teal'> </div> <span class='name'>Brook:</span> u will have to fight me for it! ...jk, u called dibs.");	
					} else {
						spanActiveText = "I wanna know whose idea this was.";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small green'> </div> <span class='name'>Leaf:</span> I'm willing to bet it was a multipurpose piece in Edgar Allen Poe's household.");
					}
					break;
				case "3-1-1":
					spanActiveText = "Hey babe.";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small lightgreen'> </div> Hey sweetcheeks.");
					break;
				case "3-1-2":
					spanActiveText = "Hullo!";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small lightgreen'> </div> what's good, my dude");
					break;
				case "3-1-3":
					spanActiveText = "Yoooo.";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small lightgreen'> </div> Breeze: YOOOOOOOOOOOO");
					break;
				case "3-2-1":
					spanActiveText = "Are you going to Rain's party?";
					$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small lightgreen'> </div> idk, I'm pretty busy getting ready to move and stuff. why?");
					break;
				case "3-2-2":
					spanActiveText = "I need a favor.";
					$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small lightgreen'> </div> i mean, depends on what it is.");
					break;
				case "3-2-3":
					spanActiveText = "Can I ask a favor?";
					$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small lightgreen'> </div> anything for you :P");
					break;
				case "4-1-1":
					spanActiveText = "Sounds good.";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small lightgreen'> </div> Great!");
					break;
				case "4-1-2":
					spanActiveText = "I guess.";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small lightgreen'> </div> Is there a better time?");
					break;
				case "4-1-3":
					spanActiveText = "Maybe come by earlier so we can just hang out?";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small lightgreen'> </div> sorry, Sun, I really do have a lot of work to do :(");
					break;
				case "4-2-1":
					spanActiveText = "I'm looking forward to it :)";
					$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small lightgreen'> </div> I'm very excited to see you!");
					break;
				case "4-2-2":
					spanActiveText = "Don't be late.";
					$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small lightgreen'> </div> i'm gonna be late just to spite u");
					break;
				case "4-2-3":
					spanActiveText = "Love you.";
					$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small lightgreen'> </div> Wait, what? ...That's... new... we'll have to talk about that when I see you.");
					break;
				case "5-1-1":
					spanActiveText = "Oh, shut up Fire.";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small red'> </div> <span class='name'>Fire:</span> Hey, i'm just being honest.");
					break;
				case "5-1-2":
					spanActiveText = "I'm sure you'll get used to the northern girls. :P";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small gray'> </div> Tempest: can confirm, northern girls like me are Good.");
					break;
				case "5-1-3":
					spanActiveText = "So I'm better than the rest!";
					$(this).parents("div.field").next(".hidden").children("#r1").html("<div class='small blue'> </div> River: idk if that was what he meant lol");
					break;
				case "5-2-1":
					if(previous == 1) {
						spanActiveText = "This isn't funny.";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small gray'> </div> Tempest: I think it's hilarious.");	
					} else {
						spanActiveText = "I'm excited for you, Breeze. Go get 'em.";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small green'> </div> Leaf: Sooo sweet!!");
					}
					break;
				case "5-2-2":
					if(previous == 2) {
						spanActiveText = "Maybe you'll find some cute northern boys for me!";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small lightgreen'> </div> Breeze: ha, ha, ha.");	
					} else {
						spanActiveText = "Of COURSE I'm better. :P";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small red'> </div> Fire: Someone's touchy.");
					}
					break;
				case "5-2-3":
					if(previous == 3) {
						spanActiveText = "You'll see the light and come back to me soon, babe.";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small lightgreen'> </div> Breeze: uh, i dunno about that... we'll see? anyway...");	
					} else {
						spanActiveText = "I'm sorry to see you go, Breeze.";
						$(this).parents("div.field").next(".hidden").children("#r2").html("<div class='small green'> </div> Leaf: yeah, i think we're all sorry to see you go!");
					}
					break;
				case "5-3-1":
					spanActiveText = "It was good while it lasted.";
					$(this).parents("div.field").next(".hidden").children("#r3").html("<div class='small lightgreen'> </div> Breeze: Yeah... it really, really was.");
					break;
				case "5-3-2":
					spanActiveText = "I love you. please come back.";
					$(this).parents("div.field").next(".hidden").children("#r3").html("<div class='small red'> </div> <span class='name'>Fire:</span> Yikes...");
					break;
				case "5-3-3":
					spanActiveText = "This was for the best.";
					$(this).parents("div.field").next(".hidden").children("#r3").html("<div class='small lightblue'> </div> Rain: :'(");
					break;
				default:
					spanActiveText = "There was an error. Please contact kammererjc@gmail.com with details.";
			};
		};
		$(this).siblings("span.active").text(spanActiveText);
	});
};
$(document).ready(main);