function displayMenu()
{
		var menu = document.getElementsByClassName("menu-head")[0];
		
		if (menu.innerHTML.match("˅ SITE MENU ˅") && menu.display != "none")
		{
			menu.innerHTML = "˄ COLLAPSE ˄";
			document.getElementById("menu-list").style.display="block";
			
		}
		
		else
		{
			menu.innerHTML = "˅ SITE MENU ˅";
			document.getElementById("menu-list").style.display="none";
			
			
		}
}
