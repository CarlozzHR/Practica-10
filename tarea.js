class Libro {
    constructor(titulo, autor, ano){
      this.titulo = titulo;
      this.autor = autor;
      this.ano = ano;

    }

    imprimirInfo(){
        console.log(`Titulo ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano} `);
    }
}

const libro1 = new Libro('Cien años de soledad', 'Gabriel García Márquez', '1967' )
libro1.imprimirInfo();