var txtDataToSign = "Hello World";
document.getElementById("SignatureTxtBox").innerHTML = "";
var canPromise = !!window.Promise;

if(canPromise) {
    cadesplugin.then(function () {
	console.log('1');
    Common_CheckForPlugIn();
   },
   function(error) {
       document.getElementById('PluginEnabledImg').setAttribute("src", "red_dot.png");
   document.getElementById('PlugInEnabledTxt').innerHTML = error;
           }
   );
} else {
    window.addEventListener("message", function (event){
if (event.data == "cadesplugin_loaded") {
console.log('cadesplugin_loaded');
    CheckForPlugIn_NPAPI();
} else if(event.data == "cadesplugin_load_error") {
console.log('cadesplugin_load_error');
   document.getElementById('PluginEnabledImg').setAttribute("src", "red_dot.png");
   document.getElementById('PlugInEnabledTxt').innerHTML = "Плагин не загружен";
    }
    },
false);
window.postMessage("cadesplugin_echo_request", "*");
}

openFileButton.onchange =  function (event) {
    fileContent = undefined;
    var input = event.target;
    var reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload = function () {
        var header = ";base64,";
        var fileData = reader.result;
        fileContent = fileData.substr(fileData.indexOf(header) + header.length);
        fileName =input.files[0].name;
        //alert(input.files[0]);
    };
};

sing_cadebes_sov.onclick = function () {
	if ('' == openFileButton.value)
    	{ alert('Файл не выбран.'); return; }
	else
    if ('' == fileContent || undefined == fileContent)
    	{ alert('Выбран пустой файл'); return; }
    else
    Common_SignCadesBES_File('CertListBox');
};

sing_cadebes_raz.onclick = function () {
	if ('' == openFileButton.value)
    	{ alert('Файл не выбран.'); return; }
	else
    if ('' == fileContent || undefined == fileContent)
    	{ alert('Выбран пустой файл'); return; }
    else
    	Common_SignCadesBES_File_ot('CertListBox')
};

//снять и проверить
check_and_getfile.onclick = function () {test();};
//проверка совмещенной подписи
check_sovsing.onclick = function () {Verefic_SignCadesBES_File_sov();};
// проверить раздельную подпиь
check_razsing.onclick = function () {
	if ('' == openFileButton.value)
    { alert('Файл не выбран.'); return; }
		else
    if ('' == fileContent || undefined == fileContent)
    { alert('Выбран пустой файл'); return; }
    	else
	Verefic_SignCadesBES_File_ot()
};


