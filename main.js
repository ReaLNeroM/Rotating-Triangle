x = [200, 400, 300];
y = [200, 200, 373];
z = [100, 100, 100];
centerx = (x[0] + x[1] + x[2]) / 3;
centery = (y[0] + y[1] + y[2]) / 3;
centerz = (z[0] + z[1] + z[2]) / 3;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function rotate(){
	for(var i = 0; i < 3; i++){
		angle = Math.atan2(y[i] - centery, x[i] - centerx);
		dist = (y[i] - centery) / Math.sin(angle);

		angle += 0.1;
		if(angle > Math.PI){
			angle -= 2 * Math.PI;
		}

		y[i] = centery + Math.sin(angle) * dist;
		x[i] = centerx + Math.cos(angle) * dist;
	}
}

function render(){
	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.moveTo(x[0], y[0]);
	for(var i = 1; i <= 3; i++){
		ctx.lineTo(x[i % 3], y[i % 3]);
	}
	ctx.closePath();
	ctx.fill();
}

main();
function main(){
	rotate();
	render();

	setTimeout(main, 20);
}