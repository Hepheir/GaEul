var inputs = {
	number: document.getElementById('js--option-number'),
	lowercase: document.getElementById('js--option-lowercase'),
	uppercase: document.getElementById('js--option-uppercase'),
	specialChar: document.getElementById('js--option-specialChar'),
	length:	document.getElementById('js--option-length'),

	generate: document.getElementById('js--generate'),
	output: document.getElementById('js--output')
};

function generate() {
	var options = {
		isNumber: inputs.number.checked,
		isLowercase: inputs.lowercase.checked,
		isUppercase: inputs.uppercase.checked,
		isSpecialChar: inputs.specialChar.checked,
		length: inputs.length.value
	},
	usuable = '',
	password = '';
	
	if (options.isNumber) {
		usuable += '1234567890';
	}
	if (options.isLowercase) {
		usuable += 'abcdefghijklmnopqrstuvwxyz';
	}
	if (options.isUppercase) {
		usuable += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}
	if (options.isSpecialChar) {
		usuable += '`~!@#$%^&*()-_+=\\|';
	}
	
	for (var i = 0; i < options.length; i++) {
		password += usuable[Math.floor(Math.random() * Date.now()) % usuable.length];
	}

	inputs.output.innerHTML = password;
}
generate();

inputs.generate.addEventListener('click', generate);