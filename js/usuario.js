class Usuario {
    
    constructor(id,clave,perfil) {
        this.id = id;
        this.clave = clave;
        this.perfil = perfil;
    }

    getid() {
        return this.id;
    }

    getclave() {
        return this.clave;
    }

    getperfil() {
        return this.perfil;
    }

}