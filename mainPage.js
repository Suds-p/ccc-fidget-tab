$(document).ready(function() {
	$('.trigger, .popup').click(function() {
		$('.popup').toggleClass('close');
	});
});

function runWidget() {
	var opts = document.getElementById('widget-select').options;
	var selected = opts[opts.selectedIndex].value;
	if (['dog', 'Greetings', 'KoiPond', 'Rainbow', 'grc'].includes(selected)) {
		window.location.href = `/${selected}/main.html`;
	}
}

document.getElementById('widget-select-btn').addEventListener('click', runWidget);