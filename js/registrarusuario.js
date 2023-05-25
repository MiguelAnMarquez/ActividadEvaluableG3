var usuarios = [];


function registrarUsuario(){
    var userid = document.getElementById("usuario").value
    var userclave = document.getElementById("clave").value
    var tipoUsuario = document.getElementById("tiposUsuarios").value

    // console.log(userid)
    // console.log(userclave)
    // console.log(tipoUsuario)


    console.log(verifyIfUserIDAlreadyExist(userid))
    usuarios.push(usuario);
    if(verifyIfUserIDAlreadyExist(userid)){
         var usuario = new Usuario(userid, userclave, tipoUsuario);
         usuarios.push(usuario);

         alert("breve pa, ya te registraste")
     }else{
         alert("uy cole, ya existes en la db")
     }
    

    

}

function verifyIfUserIDAlreadyExist(ID) {

    //console.log(usuarios)
    var data;
    var resolution = true

    console.log(usuarios.length)

   for (let i = 0; i < usuarios.length; i++) {
    let ids = usuarios[i]?.getid();
    if (ids == ID) {
        resolution = false;
    }
    
   }

   return resolution;
}