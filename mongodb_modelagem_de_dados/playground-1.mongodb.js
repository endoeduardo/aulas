use("alura-mongo")

// Dropando as collections
db.Editora.drop()
db.Livro.drop()
db.Autor.drop()

// Criando coleções
db.createCollection("Editora", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["ID", "Nome", "Telefone"],
            properties: {
                ID: {bsonType: "int"},
                Nome: {bsonType: "string"},
                Telefone: {bsonType: "string"}
            }
        }
}
})
db.createCollection("Livros",   { 
    validator:  {
        $jsonSchema:   {
         bsonType: "object",
              required:[ "ID", "id_editora", "id_autor", "Título","Páginas","Gênero","Preço"],
              properties:  {
                ID:
                    {bsonType: "int"},
                id_editora:
                    {bsonType: "int"}, 
                id_autor:
                    {bsonType: "int"}, 
                Título:
                    {bsonType: "string"},
                Páginas:
                    {bsonType: "string"},
                Gênero:
                    {bsonType: "string"},
                Preço:
                    {bsonType: "double"}
              }
        }  
    }          
})
db.createCollection("Autor",  { 
    validator:  {
        $jsonSchema:     {
         bsonType: "object",
              required:[ "ID", "Nome","Data_Nascimento","Email","Telefone"],
              properties:   {
                ID:
                    {bsonType: "int"},
                Nome:
                    {bsonType: "string"},
                Data_Nascimento:
                    {bsonType: "string"},
                Email:
                    {bsonType: "string"},
                Telefone:
                    {bsonType: "string"}
              }
        }  
    }          
})