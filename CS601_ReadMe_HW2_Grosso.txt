CS601 Assignment 2:

Directory Structure:
	Assignment2: root folder
		index.html: about Christine Grosso
		whr.html: page about the animals in my yard (at Wilson Hill Road)
		quilts.html: page about the quilt projects I've made
		skills.html: professional skills page
	NEW-->	revolutionTree.html: page about my son Rob
		gradStudent.html: page about my graduate education at BU
		BUProjects: FOLDER with 6 Word documents about my grad school class projects (links exist to these in gradStudent.html)
		Images: FOLDER of all images for website
	NEW-->	css: FOLDER of .css files
			Backgrounds: FOLDER of background image(s) (only one, right now) for webpages
			screenStyle.css:
			printStyle.css:
Requirements:
1) Every page styled with same external style sheet.
2) Print style sheet created, as well.
	note: I googled how to add page breaks to my printStyle code, but they didn't work.
	Here are the things I changed, from the screenStyle to the printStyle:
	1) fonts changed from sans-serif styles to serif styles.
	2) all backgrounds changed to white; all borders and font colors changed to black.
	3) hover attributes eliminated
	4) internal navigation for whr page changed from display:grid to display:none.
	5) video on revolutionTree page given property:value pair of display:none, because the video screen is totally black when
		 not running (waste of ink in print).
	6) had to use css to resize some of my photos just a bit, and I don't understand why.  The 2-column style I have for my pictures
		on the quilts and whr pages sit nicely side-by-side in their wrappers on the screen; 3 of them overlapped a little
		bit in print.  I'm concerned that this signals a problem with my use of the grid, and/or that responsive design
		will not be kind to me later on in the term.

3) a) multiple property:value pairs defined (see screenStyle.css).
4) ...you will be the judge of how creative/uncreative I was...I spent a long time on mechanics of grid and my columns, 
	and less time on show-y elements...
5) a) I had some difficulty with the grid; but I DID use the grid! I had trouble nesting some of my items.  I spent a good 8-10 hours alone
	 just on trying to get my internal navigation to work on the whr page inside my section wrappers, and I finally gave up and put them 
	back outside.  Some manipulation concepts are still a bit fuzzy, but whatever it  looks like to you, I spent a long, long time 
	on it!!  I DID play with GridGarden, and I did enjoy watching a decent amount of success happen with the grid in my site.  
	Content still needs editing (particularly on the intro to my skills page), colors need help, and I will probably need to eliminate
	some more private content that I wouldn't want to go live (such as my maiden name on the pet squirrels link), but my main
	concern this week was getting my pages styled and looking consistent.
    b) added hover to my "top" and "bottom" of page navigations, for the pages long enough to warrant them.  (I really just wanted to have a
	button, but I spent a couple of hours on it and never got a nice, little oval button to show up, so the hyperlink exists in a <p>.)
6) Added one additional page today, for a total so far of 6 pages.  This page has a picture and a video on it.



