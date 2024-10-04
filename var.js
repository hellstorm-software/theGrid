
const helpResponse = `
	<span style="color: #a6ddff;">
		<u>Commands:</u> <br>
		>> discord -- link to the official discord<br>
		>> clear -- clear the console<br>
		>> whoami -- check your login<br>
		>> hackmud -- hackmud info<br>
		>> matrix.on / matrix.off -- enable/disable matrix text over chat box<br>
		>> kyphxr.console -- switch to the console kyphxr uses in his vidoes<br>
		>> main.console -- switch to the main biohack console<br>
	</span>
`;

const pugResponseA = `
	<div style="color: #a6ddff; white-space: pre; lineHeight: 12px; margin-left: 100px;">
 ###################################
#       <span style="font-size: 24px;">Name:</span> <span style="font-size: 18px; color: red;">Parapug</span>        #
#       ---------------------       #     <span style="color: #7e2eff;"><i>this is a Keter-class entity. proceed with caution.</i></span>
#         power level: <span style="color: red;">error</span>        #     >> <span style="color: #7e2eff;">unlike SCP-1783, PUG has abilities that far outweigh that of most beings.<i></span>
#       dims of orgin: <span style="color: red;">error</span>        #     >> <span style="color: #7e2eff;">experimentation of this entity is ill-advised.<i></span>
#        affiliations: <span style="color: red;">grim beard</span>   #
 ###################################
	</div>
`;

const pugResponseB = `
	<div style="color: #a6ddff; white-space: pre; lineHeight: 12px; margin-left: 100px;">
 ###################################
#       <span style="font-size: 24px;">Name:</span> <span style="font-size: 18px; color: red;">Parapug</span>        #
#       ---------------------       #     <span style="color: #7e2eff;"><i>this is a Keter-class entity. proceed with caution.</i></span>
#         power level: <span style="color: red;">error</span>        #     >> <span style="color: #7e2eff;">unlike SCP-1783, PUG has abilities that far outweigh that of most beings.<i></span>
#       dims of orgin: <span style="color: red;">error</span>        #     >> <span style="color: #7e2eff;">experimentation of this entity is ill-advised.<i></span>
#        affiliations: <span style="color: red;" class="glitch-div">resetting</span>   #
 ###################################
	</div>
`;

const pugResponseC = `
	<div style="color: #a6ddff; white-space: pre; lineHeight: 12px; margin-left: 100px;">
 ###################################
#        <span style="font-size: 24px;">Name:</span> <span style="font-size: 18px; color: red;" class="glitch-div">Pyxie</span>         #
#       ---------------------       #     <span style="color: #7e2eff;"><i>this is a Keter-class entity. proceed with caution.</i></span>
#         power level: <span style="color: red;">error</span>        #     >> <span style="color: #7e2eff;">experimentation of this entity is ill-advised.<i></span>
#       dims of orgin: <span style="color: red;">error</span>        #     
#        affiliations: <span style="color: red;" class="glitch-div">sxlar</span>       #
 ###################################
	</div>
`;

const kyphxrLookupResponse = `
	######################################################################################################################################################################################################<br>
	######################################################################################################################################################################################################<br>
	<span style="font-size: 20px; margin-left: 43%;"><u>user.Kyphxr:</u></span><br>
	<div style="font-size: 8px; margin-left: 5%;">
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX;+++xXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX+++:;XXXXXXXXXXXXXXXXXXXXXXX:.+xx+;XXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXX;++++..;+XXXXXXXXXXXXXXXXXXXX+..:xxx++XXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXx+xxx+...++XXXXXXXXXXXXXXXXXX+:.::xxx+;;XXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXX++xxx+::.:+X$XXXXXXXXXXXXXXX+;.:::xxxx+.XXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXX:+xxx+::::.$&$$XXXX+::;xXX+;+:::::;xxxx..XXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXX.+xxx+.::::X&&+;+++;;;+++:++.::::.:xxxx:.:XXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXX+.:++++x:::::...;++;;+xxxx;;;+:.:.XX+x++:..xXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXX...:++;XXX.....:++;;.:;+++++;....;XXX.:;....XXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXx;:.....XXX....:++;:;.....:;;;:...:.XXX:....:XXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXX....;XX....:;;:;;+......::::....:xXXX+....XXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXX;...XX:...:;;:;++x::::::::::....::XXXXXx:.XXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:.XX...:;+:+xX$&$x++;:::::.....:+XXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx:..::+;+xx$&&&;::::;::::....::XXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX;.::;+++XX&&&&&&::..&&:::::...:.XXXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX+:::;+x;x$&&&&&&&&:::&&&::::...::xXXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX::.++x:;X&&&xx&&&&&$;x&&&::::...::XXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX;:...+X+::+++$$&&&&&&$x;;X:::;:...:+XXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXX+....X;+&:+&&&&&&&&&&&&&&&$+:x;.:....XXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.......:;&xX&&&&&&&&&&&&&&&:X;:.......XXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXX.......;+:::;&&&&&&&&&&&&&&&+::........+XXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXX+..........::;X&&&&&&&&&&&&&:::..........XXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXX...........;::x;X&&&&&&&&&::.:..........:XXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXX:..............:;+$&&&$x;..............XXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.......:.......:+++++:.....:.......:XXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:....:::::.;;::....::::::;:.....:XXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:....:::::+XX$XXXXxXx:.........:XXXXXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX+;;::....:.:::+&&&&$&&$::...;;;+++++;+XXXXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXXX:;+:.;+;;+&$::....+&&&&:....:+$&+++;..::;:XXXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXXX;;;;..;;;;;&$xx.:::::X+.:;;::;xX&;;;;.:::;::XXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXX;:.::..;;;;x&xX+::;;&&&&&+++;:;x+&x;;;:.:::::xXXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXXx.:..:..:;;;&&;x;::;&&&&&&&++;::x;&$:;;:.:::...XXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXXx:::...:.::::&X;+:::;$&&&&&X+;;;:x;$&::::....::.xXXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXXX::::::...:::+&+;+:;;:;:x&$:;;;;;:++X&::::....:..:XXXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXXX::::::.:..:::x&:+;;+;x;::.:;+:;+:;;+X&::::...:::..+XXXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXXX:::::::.:..:::$&:+:;+;+++:;;;;++;:::++x;:::.....:..:;XXXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXX+:::::::....:::;::;:;::;++;;;;;;;::::;;::::......:...:+XXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXXx::::::.::...::.:.:;;::;;;+xXX+++++;;::+:.::.........:::XXXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXXX:;;;:..:::...::.:::;;:;;+;xxx;+;;;;;;::;:..:..........::.XXXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXX:;;:;;:...:..::..:::;;::;;++;;;;;;;++:::::..............:::XXXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXX...:::........::...:;::::::;;;;;;;++;;;::::..................XXXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXX.....::::....::...:;::::::::::::;;;;::..:............:......:XXXXXXXXXXXX<br>
		XXXXXXXXXXXXXXXXXXX+......::....::...:::::::::::::::::::...:.................::::XXXXXXXXXXX<br>
	</div>
	<div style="margin-left: 37%; margin-top: -30%; margin-bottom: 30%;">
		Username: <i>redacted</i><br>
		DOB: <i>redacted</i><br>
		Clearance: <span style="color: green;"><i>root access</i></span><br>
		<span style="color: #3b4eff;">-------------------------------</span><br>
		Main Channel :<a href="https://www.youtube.com/@kyphxr" target="_blank" style="color: #00d478;">[link]</a><br>
		Streaming Channel :<a href="https://www.youtube.com/@kyphxrtv" target="_blank" style="color: #00d478;">[link]</a><br>
		<span style="color: #3b4eff;">-------------------------------</span><br>
		user accounts: 27<br>
		scripts written: 267<br>
	</div>
	######################################################################################################################################################################################################<br>
	######################################################################################################################################################################################################
`;

const grimbeardLookupResponse = `
	######################################################################################################################################################################################################<br>
	######################################################################################################################################################################################################<br>
	<span style="font-size: 20px; margin-left: 43%;"><u>user.Grim_Beard:</u></span><br>
	<div style="font-size: 8px; margin-left: 5%;">
		%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*********************=:=#%%%%%%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%%%%%***************************=.*%%%%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%#*****+=+#%%%%%%%%%%%%%%%%%##****+-:+%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%##****+=-#%%%%%%%%%%%%%%%%%%%%%%%#*****+--*%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%#*****==**+++%#*#%%%%%%%%%%%%%%%+#%%%%#*-+**+-:#%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%#****++=*##*****=*+:%%%%%%%%%%%%%%*==%%%%#*-******+:=#%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%#***+-*%#***********:%%%%%%%%%%%%%#**+-#%#**=+%%#****:=%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%#***-:%%*****+=%%%%**=*%%%%%%%%%%%#=***+-****+=%%%%#**+.+%%%%%%%%%%%%<br>
		%%%%%%%%%%%#***+:#%%*****.%%%%%#*==%%%%%%%%%%*#**********+:%%%%%***+.*%%%%%%%%%%%<br>
		%%%%%%%%%%%***+.#%%#****-*%%%%%#*++##****=***=+***-*******.%%%%%%***+.#%%%%%%%%%%<br>
		%%%%%%%%%%***+.#%%%****+:%%%%%%%%#**=##**=##*+-***:##*-+**.#%%%%%%***=.#%%%%%%%%%<br>
		%%%%%%%%%****:+%%%%#****-##***+*%%**=*#**=#***.***+-%#****.#%%%%%%#***-.#%%%%%%%%<br>
		%%%%%%%%#**+:=%%%%%%*****+=%#**=*#**-*#+*=+***:%***=+%%#**:#%%%%%%%#***:=%%%%%%%%<br>
		%%%%%%%#***--%%%%%%%#-****+:****:#**++***:%#**:%***-#%%#**-*%%%%%%%%#**+.+%%%%%%%<br>
		%%%%%%#***=:%%%%%%%%%%%%#*******.%**+.%**-+**-*%**+=%%%%**++%%%%%%%%%***+.+%%%%%%<br>
		%%%%%%#**+.+%%%%%%%%%%%%%%**+=**.%#**.%#*-+**.#%**.%%%%%#*+=%%%%%%%%%#***::%%%%%%<br>
		%%%%%%#***:=%%%%%%%%%%%%%%%#**#*.%#**==%+-#**.%%#-#%%*+*-*+=%%%%%%%%%#***.+%%%%%%<br>
		%%%%%%#***=:%%%%%%%#*****+=###%#.%#+=#%%%%%#-#%%*=%#*+=+**=+%%%%%%%%%#**+.#%%%%%%<br>
		%%%%%%%***+.#%%%%%%%%#*++****:%%#%%*%%%%##*##%%###*#********=-%%%%%%%***-.%%%%%%%<br>
		%%%%%%%#**+.#%%%%%%%%#*+:%%**-#**++*+.***++%####***-+***=+***:#%%%%%%***:+%%%%%%%<br>
		%%%%%%%#**+:+%%%%%%%%#*+:%%**+-**=*%%**+**.%**=*#**-*+=+:##**=*%%%%%#**+.#%%%%%%%<br>
		%%%%%%%%***-.%%%%%%%%#**:%#**+.#*=+%%%*:**:#**=+#**-+*-#%%%**+=%%%%%***+.%%%%%%%%<br>
		%%%%%%%%#**=.%%%%%%%%%**+***+=##*++****+**************+++++#**-*%%%%***=-%%%%%%%%<br>
		%%%%%%%%#**+.+%%%%%%%%#*++***+-#*++##*-*#**:***:#**=+*-*%%#**+=%%%%#***:=%%%%%%%%<br>
		%%%%%%%%#***::#%%%%%%%#*+.%#**==*+=%#+%%%*+:#**.%#*-#*+=##*+:#%%%%%#***.*%%%%%%%%<br>
		%%%%%%%%%****+.+%%%%%%***-#%**==*++***==%*+:%**=*==#%***+++-#%%%%#****--#%%%%%%%%<br>
		%%%%%%%%%%#****-:#%%%%***==##*==*+****=#%*+.%**=-%%%%+-+*=-%%%%%#***+:#%%%%%%%%%%<br>
		%%%%%%%%%%%%#***+.=%%%**+**++*+=+.%%%%%%%#*.%*=+%%%%%%%*=+%%%%#***+:+%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%#****=.#%%#+.#%##**%%%%%%%%%%*.%*-%%%%%%%%*+%%%%****=:#%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%#***+:-%%%#*#%%%%%%%%%%%%%#*.#%%%%%%%%%%%%%%#***+:*%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%****=.*%%%%%%%%%%%%%%%%%#*.#%%%%%%%%%%%%#***+--#%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%#****-:##%%%%%%%%%%%%%%#*.+#%%%%%%%%%%#***+:#%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%#*****++====*%%%%#**=-+:+++=:*#*******+-=%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%#**********++********++=+******++*++#%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%%%%%%###***********+=+==+++=**##%%%%%%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%###*****=+*++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#******.=*****#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%######**:+####*#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*.+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*.+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%<br>
		%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%<br>
	</div>
	<div style="margin-left: 37%; margin-top: -30%; margin-bottom: 30%;">
		Username: <i>redacted</i><br>
		DOB: <i>redacted</i><br>
		Clearance: <span style="color: green;"><i>no access</i></span><br>
		<span style="color: #3b4eff;">-------------------------------</span><br>
		Main Channel :<a href="https://www.youtube.com/@GrimBeard" target="_blank" style="color: #00d478;">[link]</a><br>
		<span style="color: #3b4eff;">-------------------------------</span><br>
		user accounts: 0<br>
		scripts written: 0<br>
		<br><br>
		<span style="font-size: 20px; color: red;">BEWARE THE PUG</span>
	</div>
	######################################################################################################################################################################################################<br>
	######################################################################################################################################################################################################
`;

const devMessage = `
	<div style="font-size: 18px;">
		<span style="color: red;">
			##################################################################################################################################### <br>
			##################################################################################################################################### <br>
			##################################################################################################################################### <br>
			######################################################
		</span> 
		<span style="color: #5e4dff;">MSG From the Developer</span> 
		<span style="color: red;">#######################################################</span> <br>
		<span style="color: #5e4dff;">ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤthis is the only not-in-universe msg you will recieve from me.</span> <br>
		<span style="color: red;">
			##################################################################################################################################### <br>
		</span>
	</div>
	<div style="font-size: 16px;">
		<span style="color: green;">
			This is a hacking game. Lying, stealing, social engineering, and subterfuge are highly encouraged. <br>
			You all have a single enemy, but that does not make you all allies. <br>
			Trust no one. <br>
		</span>
	</div>
	<div style="font-size: 18px;">
			<span style="color: red;">#####################################################################################################################################</span> <br>
	</div>
	<div style="font-size: 24px;">
		We have a ZERO TOLERANCE POLICY for hate speech, discrimination, abuse, and irl attacks <br>
		We can and will ban you. This is a game and a place for fun. Please allow others to enjoy it <br>
	</div>
	<div style="font-size: 18px;">
			<span style="color: red;">#####################################################################################################################################</span> <br>
	</div>
	use matrix.tut to get started
`;

const tutorialMatrix = `
	<div style="margin-left: 5%; font-size: 18px;">
		| 3743ㅤㅤㅤ9236ㅤㅤㅤ2845 |<br>
		<br><br>
		| 4951ㅤㅤㅤ8227ㅤㅤㅤ1483 |<br>
		<br><br>
		| 1926ㅤㅤㅤ1603ㅤㅤㅤ6717 |<br>
		<br>
	</div>
	use room [code] to view a rooms contents
`;

const emptyResponse = `
	<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>
	<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>
	<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>
	<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>
	<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>
	<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>
	<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>
	<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>ㅤ<br>
`;

const resetHT = `
		<div style="margin-left: 1%; color: #a6ddff;">
			<span style="color: #666">v. 14.0.0.6<br>
			there is info here, its use may not be apparent now but will be of use to you in the future<br>
			-------------------------------------------------------</span><br>
			<span ><a style="color: #5e4dff;" href="https://discord.gg/ykmdtZhSN3">Join the Discord!</a></span><br>
			----------<br>
			<a style="color: #995c32" href="https://hellstorm-software.github.io/makeCoolShit/makeCoolShit.html" target="_blank">enter the grid (sxlar wasteland)</a><br>
			<span style="color: green;">the project is approximately :: 0.1% complete</span>
			#########################################################################################################################################################################################<br>
			<br><br>
			<span style="color: #fe5746;">drezzOS installed</span> <span style="color: #7e2eff">[sxlar jailbreak]</span> :: status: <span style="color: green">operational</span><br>
			<span style="color: green;">location:</span> 48.383162 x 23.415359<br>
			<span style="color: green; white-space: pre;">   dimns:</span> sxlaris<br>
			<span style="color: green; white-space: pre;">      DB:</span> theGrid // sxlarisDB // psuJARVIS -- total: 14TB<br>
			----------------<br>
			<span style="color: #7e2eff; white-space: pre; font-size: 14px;"><u>Installed Applications</u>:</span><br>
			>> genestealer.<span style="color: #f0ffa6; white-space: pre;">exe</span> v 0.0.0.4<br>
			>> biohack.<span style="color: #f0ffa6; white-space: pre;">exe</span> v 0.0.0.7<br>
			>> pyxieBot.<span style="color: #e4a6ff; white-space: pre;">ai</span> v 0.0.0.2<br>
			>> holodeck.<span style="color: #f0ffa6; white-space: pre;">exe</span><br>
			----------------<br>
			<span style="color: #7e2eff">connected to server</span> :: IPv4 GRD: <span style="color: green;">203.0.113.14</span><br>
			<span style="color: #7e2eff">connecting from</span> :: IPv4 SXL: <span style="color: green;">1623:5678:9abc:def0:1234:5678:9abc:def0:1234:5678:9abc:def0:1234:5678:9abc:def0</span><br>
			<span style="color: #7e2eff">connection status:</span> stable<br>
		</div>
`;

