var arr=["0","0","0","0","0","0","0","0","0"];
				var c=0,x,o,u1=0,u2=0;
				function myFunc(){			

				x = document.getElementById('xuser').value;
				o = document.getElementById('ouser').value;
				
				if(x!=NaN && o!=NaN){
					alert("User playing X : "+x+"\n User playing O: "+o+"\n Click ok to play");
				}
				else{
					alert("User playing X : "+x+"\n User playing O: "+o+"\n Enter proper names please otherwise yur name will be assigned as undefined.");
				}
				score();
				
				};
		
				function Func(){
					if(c==0 || c%2==0){	
						if(arr[0]=="0"){								
							arr[0]="x";
						}
						else{
							return;
						}
					}
					else{
						if(arr[0]=="0"){	
							arr[0]="O";
						}
						else{
							return;
						}
					}
					c++;
					
					document.getElementById('demo').innerHTML= arr[0];
					
					if((arr[0]=="x" && arr[1]=="x" && arr[2]=="x") || (arr[0]=="x" && arr[4]=="x" && arr[8]=="x") || 
					
					(arr[0]=="x" && arr[3]=="x" && arr[6]=="x") || (arr[2]=="x" && arr[4]=="x" && arr[6]=="x") || 
					
					(arr[2]=="x" && arr[5]=="x" && arr[8]=="x") || (arr[1]=="x" && arr[4]=="x" && arr[7]=="x") ||
					
					(arr[6]=="x" && arr[7]=="x" && arr[8]=="x") || (arr[3]=="x" && arr[4]=="x" && arr[5]=="x")){
						alert(x+" User playing with \"X\" has won.");
						u1=u1+1;
						score();
						restart();
						return;
					}
					
					else if((arr[0]=="O" && arr[1]=="O" && arr[2]=="O") || (arr[0]=="O" && arr[4]=="O" && arr[8]=="O") || 
					
					(arr[0]=="O" && arr[3]=="O" && arr[6]=="O") || (arr[2]=="O" && arr[4]=="O" && arr[6]=="O") || 
					
					(arr[2]=="O" && arr[5]=="O" && arr[8]=="O") || (arr[1]=="O" && arr[4]=="O" && arr[7]=="O") ||
					
					(arr[6]=="O" && arr[7]=="O" && arr[8]=="O") || (arr[3]=="O" && arr[4]=="O" && arr[5]=="O")){
						alert(o+" User playing with \"O\" has won.");
						u2=u2+1;
						score();
						restart();
						return;
					}
					
					if(c==9){
						alert("Match Draw.");
						restart();
					}
					
				};
				
				function Func1(){
					if(c==0 || c%2==0){					
						if(arr[1]=="0"){								
							arr[1]="x";
						}
						else{
							return;
						}
					}
					else{
						if(arr[1]=="0"){								
							arr[1]="O";
						}
						else{
							return;
						}
						
					}
					c++;
					document.getElementById('demo1').innerHTML= arr[1];
					
					if((arr[0]=="x" && arr[1]=="x" && arr[2]=="x") || (arr[0]=="x" && arr[4]=="x" && arr[8]=="x") || 
					
					(arr[0]=="x" && arr[3]=="x" && arr[6]=="x") || (arr[2]=="x" && arr[4]=="x" && arr[6]=="x") || 
					
					(arr[2]=="x" && arr[5]=="x" && arr[8]=="x") || (arr[1]=="x" && arr[4]=="x" && arr[7]=="x") ||
					
					(arr[6]=="x" && arr[7]=="x" && arr[8]=="x") || (arr[3]=="x" && arr[4]=="x" && arr[5]=="x")){
						alert(x+" User playing with \"X\" has won.");
						u1=u1+1;
						score();
						restart();
						return;
					}
					
					else if((arr[0]=="O" && arr[1]=="O" && arr[2]=="O") || (arr[0]=="O" && arr[4]=="O" && arr[8]=="O") || 
					
					(arr[0]=="O" && arr[3]=="O" && arr[6]=="O") || (arr[2]=="O" && arr[4]=="O" && arr[6]=="O") || 
					
					(arr[2]=="O" && arr[5]=="O" && arr[8]=="O") || (arr[1]=="O" && arr[4]=="O" && arr[7]=="O") ||
					
					(arr[6]=="O" && arr[7]=="O" && arr[8]=="O") || (arr[3]=="O" && arr[4]=="O" && arr[5]=="O")){
						alert(o+" User playing with \"O\" has won.");
						u2=u2+1;
						score();
						restart();
						return;
					}
					
					if(c==9){
						alert("Match Draw.");
						restart();
					}
				};
				
				function Func2(){
					if(c==0 || c%2==0){	
						if(arr[2]=="0"){								
							arr[2]="x";
						}
						else{
							return;
						}
					}
					else{
						if(arr[2]=="0"){	
							arr[2]="O";
						}
						else{
							return;
						}
					}
					c++;
					document.getElementById('demo2').innerHTML= arr[2];
					
					if((arr[0]=="x" && arr[1]=="x" && arr[2]=="x") || (arr[0]=="x" && arr[4]=="x" && arr[8]=="x") || 
					
					(arr[0]=="x" && arr[3]=="x" && arr[6]=="x") || (arr[2]=="x" && arr[4]=="x" && arr[6]=="x") || 
					
					(arr[2]=="x" && arr[5]=="x" && arr[8]=="x") || (arr[1]=="x" && arr[4]=="x" && arr[7]=="x") ||
					
					(arr[6]=="x" && arr[7]=="x" && arr[8]=="x") || (arr[3]=="x" && arr[4]=="x" && arr[5]=="x")){
						alert(x+" User playing with \"X\" has won.");
						u1=u1+1;
						score();
						restart();
						return;
					}
					
					else if((arr[0]=="O" && arr[1]=="O" && arr[2]=="O") || (arr[0]=="O" && arr[4]=="O" && arr[8]=="O") || 
					
					(arr[0]=="O" && arr[3]=="O" && arr[6]=="O") || (arr[2]=="O" && arr[4]=="O" && arr[6]=="O") || 
					
					(arr[2]=="O" && arr[5]=="O" && arr[8]=="O") || (arr[1]=="O" && arr[4]=="O" && arr[7]=="O") ||
					
					(arr[6]=="O" && arr[7]=="O" && arr[8]=="O") || (arr[3]=="O" && arr[4]=="O" && arr[5]=="O")){
						alert(o+" User playing with \"O\" has won.");
						u2=u2+1;
						score();
						restart();
						return;
					}
					
					if(c==9){
						alert("Match Draw.");
						restart();
					}
				};
				
				function Func3(){
					if(c==0 || c%2==0){	
						if(arr[3]=="0"){								
							arr[3]="x";
						}
						else{
							return;
						}
					}
					else{
						if(arr[3]=="0"){	
							arr[3]="O";
						}
						else{
							return;
						}
					}
					c++;
					document.getElementById('demo3').innerHTML= arr[3];
					
					if((arr[0]=="x" && arr[1]=="x" && arr[2]=="x") || (arr[0]=="x" && arr[4]=="x" && arr[8]=="x") || 
					
					(arr[0]=="x" && arr[3]=="x" && arr[6]=="x") || (arr[2]=="x" && arr[4]=="x" && arr[6]=="x") || 
					
					(arr[2]=="x" && arr[5]=="x" && arr[8]=="x") || (arr[1]=="x" && arr[4]=="x" && arr[7]=="x") ||
					
					(arr[6]=="x" && arr[7]=="x" && arr[8]=="x") || (arr[3]=="x" && arr[4]=="x" && arr[5]=="x")){
						alert(x+" User playing with \"X\" has won.");
						u1=u1+1;
						score();
						restart();
						return;
					}
					
					else if((arr[0]=="O" && arr[1]=="O" && arr[2]=="O") || (arr[0]=="O" && arr[4]=="O" && arr[8]=="O") || 
					
					(arr[0]=="O" && arr[3]=="O" && arr[6]=="O") || (arr[2]=="O" && arr[4]=="O" && arr[6]=="O") || 
					
					(arr[2]=="O" && arr[5]=="O" && arr[8]=="O") || (arr[1]=="O" && arr[4]=="O" && arr[7]=="O") ||
					
					(arr[6]=="O" && arr[7]=="O" && arr[8]=="O") || (arr[3]=="O" && arr[4]=="O" && arr[5]=="O")){
						alert(o+" User playing with \"O\" has won.");
						u2=u2+1;
						score();
						restart();
						return;
					}
					
					if(c==9){
						alert("Match Draw.");
						restart();
					}
				};
				
				function Func4(){
					if(c==0 || c%2==0){	
						if(arr[4]=="0"){								
							arr[4]="x";
						}
						else{
							return;
						}
					}
					else{
						if(arr[4]=="0"){	
							arr[4]="O";
						}
						else{
							return;
						}
					}
					c++;
					document.getElementById('demo4').innerHTML= arr[4];
					
					if((arr[0]=="x" && arr[1]=="x" && arr[2]=="x") || (arr[0]=="x" && arr[4]=="x" && arr[8]=="x") || 
					
					(arr[0]=="x" && arr[3]=="x" && arr[6]=="x") || (arr[2]=="x" && arr[4]=="x" && arr[6]=="x") || 
					
					(arr[2]=="x" && arr[5]=="x" && arr[8]=="x") || (arr[1]=="x" && arr[4]=="x" && arr[7]=="x") ||
					
					(arr[6]=="x" && arr[7]=="x" && arr[8]=="x") || (arr[3]=="x" && arr[4]=="x" && arr[5]=="x")){
						alert(x+" User playing with \"X\" has won.");
						u1=u1+1;
						score();
						restart();
						return;
					}
					
					else if((arr[0]=="O" && arr[1]=="O" && arr[2]=="O") || (arr[0]=="O" && arr[4]=="O" && arr[8]=="O") || 
					
					(arr[0]=="O" && arr[3]=="O" && arr[6]=="O") || (arr[2]=="O" && arr[4]=="O" && arr[6]=="O") || 
					
					(arr[2]=="O" && arr[5]=="O" && arr[8]=="O") || (arr[1]=="O" && arr[4]=="O" && arr[7]=="O") ||
					
					(arr[6]=="O" && arr[7]=="O" && arr[8]=="O") || (arr[3]=="O" && arr[4]=="O" && arr[5]=="O")){
						alert(o+" User playing with \"O\" has won.");
						u2=u2+1;
						score();
						restart();
						return;
					}
					if(c==9){
						alert("Match Draw.");
						restart();
					}
				};
				
				function Func5(){
					if(c==0 || c%2==0){	
						if(arr[5]=="0"){								
							arr[5]="x";
						}
						else{
							return;
						}
					}
					else{
						if(arr[5]=="0"){	
							arr[5]="O";
						}
						else{
							return;
						}
					}
					c++;
					document.getElementById('demo5').innerHTML= arr[5];
					
					if((arr[0]=="x" && arr[1]=="x" && arr[2]=="x") || (arr[0]=="x" && arr[4]=="x" && arr[8]=="x") || 
					
					(arr[0]=="x" && arr[3]=="x" && arr[6]=="x") || (arr[2]=="x" && arr[4]=="x" && arr[6]=="x") || 
					
					(arr[2]=="x" && arr[5]=="x" && arr[8]=="x") || (arr[1]=="x" && arr[4]=="x" && arr[7]=="x") ||
					
					(arr[6]=="x" && arr[7]=="x" && arr[8]=="x") || (arr[3]=="x" && arr[4]=="x" && arr[5]=="x")){
						alert(x+" User playing with \"X\" has won.");
						u1=u1+1;
						score();
						restart();
						return;
					}
					
					else if((arr[0]=="O" && arr[1]=="O" && arr[2]=="O") || (arr[0]=="O" && arr[4]=="O" && arr[8]=="O") || 
					
					(arr[0]=="O" && arr[3]=="O" && arr[6]=="O") || (arr[2]=="O" && arr[4]=="O" && arr[6]=="O") || 
					
					(arr[2]=="O" && arr[5]=="O" && arr[8]=="O") || (arr[1]=="O" && arr[4]=="O" && arr[7]=="O") ||
					
					(arr[6]=="O" && arr[7]=="O" && arr[8]=="O") || (arr[3]=="O" && arr[4]=="O" && arr[5]=="O")){
						alert(o+" User playing with \"O\" has won.");
						u2=u2+1;
						score();
						restart();
						return;
					}
					
					if(c==9){
						alert("Match Draw.");
						restart();
					}
				};
				
				function Func6(){
					if(c==0 || c%2==0){	
						if(arr[6]=="0"){								
							arr[6]="x";
						}
						else{
							return;
						}
					}
					else{
						if(arr[6]=="0"){	
							arr[6]="O";
						}
						else{
							return;
						}
					}
					c++;
					document.getElementById('demo6').innerHTML= arr[6];
					
					if((arr[0]=="x" && arr[1]=="x" && arr[2]=="x") || (arr[0]=="x" && arr[4]=="x" && arr[8]=="x") || 
					
					(arr[0]=="x" && arr[3]=="x" && arr[6]=="x") || (arr[2]=="x" && arr[4]=="x" && arr[6]=="x") || 
					
					(arr[2]=="x" && arr[5]=="x" && arr[8]=="x") || (arr[1]=="x" && arr[4]=="x" && arr[7]=="x") ||
					
					(arr[6]=="x" && arr[7]=="x" && arr[8]=="x") || (arr[3]=="x" && arr[4]=="x" && arr[5]=="x")){
						alert(x+" User playing with \"X\" has won.");
						u1=u1+1;
						score();
						restart();
						return;
					}
					
					else if((arr[0]=="O" && arr[1]=="O" && arr[2]=="O") || (arr[0]=="O" && arr[4]=="O" && arr[8]=="O") || 
					
					(arr[0]=="O" && arr[3]=="O" && arr[6]=="O") || (arr[2]=="O" && arr[4]=="O" && arr[6]=="O") || 
					
					(arr[2]=="O" && arr[5]=="O" && arr[8]=="O") || (arr[1]=="O" && arr[4]=="O" && arr[7]=="O") ||
					
					(arr[6]=="O" && arr[7]=="O" && arr[8]=="O") || (arr[3]=="O" && arr[4]=="O" && arr[5]=="O")){
						alert(o+" User playing with \"O\" has won.");
						u2=u2+1;
						score();
						restart();
						return;
					}
					
					if(c==9){
						alert("Match Draw.");
						restart();
					}
				};
				
				function Func7(){
					if(c==0 || c%2==0){	
						if(arr[7]=="0"){								
							arr[7]="x";
						}
						else{
							return;
						}
					}
					else{
						if(arr[7]=="0"){	
							arr[7]="O";
						}
						else{
							return;
						}
					}
					c++;
					document.getElementById('demo7').innerHTML= arr[7];
					
					if((arr[0]=="x" && arr[1]=="x" && arr[2]=="x") || (arr[0]=="x" && arr[4]=="x" && arr[8]=="x") || 
					
					(arr[0]=="x" && arr[3]=="x" && arr[6]=="x") || (arr[2]=="x" && arr[4]=="x" && arr[6]=="x") || 
					
					(arr[2]=="x" && arr[5]=="x" && arr[8]=="x") || (arr[1]=="x" && arr[4]=="x" && arr[7]=="x") ||
					
					(arr[6]=="x" && arr[7]=="x" && arr[8]=="x") || (arr[3]=="x" && arr[4]=="x" && arr[5]=="x")){
						alert(x+" User playing with \"X\" has won.");
						u1=u1+1;
						score();
						restart();
						return;
					}
					
					else if((arr[0]=="O" && arr[1]=="O" && arr[2]=="O") || (arr[0]=="O" && arr[4]=="O" && arr[8]=="O") || 
					
					(arr[0]=="O" && arr[3]=="O" && arr[6]=="O") || (arr[2]=="O" && arr[4]=="O" && arr[6]=="O") || 
					
					(arr[2]=="O" && arr[5]=="O" && arr[8]=="O") || (arr[1]=="O" && arr[4]=="O" && arr[7]=="O") ||
					
					(arr[6]=="O" && arr[7]=="O" && arr[8]=="O") || (arr[3]=="O" && arr[4]=="O" && arr[5]=="O")){
						alert(o+" User playing with \"O\" has won.");
						u2=u2+1;
						score();
						restart();
						return;
					}
					
					if(c==9){
						alert("Match Draw.");
						restart();
					}
				};
				
				function Func8(){
					if(c==0 || c%2==0){	
						if(arr[8]=="0"){								
							arr[8]="x";
						}
						else{
							return;
						}
					}
					else{
						if(arr[8]=="0"){	
							arr[8]="O";
						}
						else{
							return;
						}
					}
					c++;
					document.getElementById('demo8').innerHTML= arr[8];
					
					if((arr[0]=="x" && arr[1]=="x" && arr[2]=="x") || (arr[0]=="x" && arr[4]=="x" && arr[8]=="x") || 
					
					(arr[0]=="x" && arr[3]=="x" && arr[6]=="x") || (arr[2]=="x" && arr[4]=="x" && arr[6]=="x") || 
					
					(arr[2]=="x" && arr[5]=="x" && arr[8]=="x") || (arr[1]=="x" && arr[4]=="x" && arr[7]=="x") ||
					
					(arr[6]=="x" && arr[7]=="x" && arr[8]=="x") || (arr[3]=="x" && arr[4]=="x" && arr[5]=="x")){
						alert(x+" User playing with \"X\" has won.");
						u1=u1+1;
						score();
						restart();
						return;
					}
					
					else if((arr[0]=="O" && arr[1]=="O" && arr[2]=="O") || (arr[0]=="O" && arr[4]=="O" && arr[8]=="O") || 
					
					(arr[0]=="O" && arr[3]=="O" && arr[6]=="O") || (arr[2]=="O" && arr[4]=="O" && arr[6]=="O") || 
					
					(arr[2]=="O" && arr[5]=="O" && arr[8]=="O") || (arr[1]=="O" && arr[4]=="O" && arr[7]=="O") ||
					
					(arr[6]=="O" && arr[7]=="O" && arr[8]=="O") || (arr[3]=="O" && arr[4]=="O" && arr[5]=="O")){
						alert(o+" User playing with \"O\" has won.");
						u2=u2+1;
						score();
						restart();
						return;
					}
					
					if(c==9){
						alert("Match Draw.");
						restart();
					}
				};
				
				function score(){
					document.getElementById('u1').innerHTML= x+" : "+u1;
					document.getElementById('u2').innerHTML= o+" : "+u2;
				}
				
				function restart(){
					var i=0;
					for(i=0;i<arr.length;i++){
						arr[i]="0";
					};
					
					document.getElementById('demo').innerHTML= "";
					document.getElementById('demo1').innerHTML= "";
					document.getElementById('demo2').innerHTML= "";
					document.getElementById('demo3').innerHTML= "";
					document.getElementById('demo4').innerHTML= "";
					document.getElementById('demo5').innerHTML= "";
					document.getElementById('demo6').innerHTML= "";
					document.getElementById('demo7').innerHTML= "";
					document.getElementById('demo8').innerHTML= "";
					c=0;
				};
			
				
				
				
				
				
				
