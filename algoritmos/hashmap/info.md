# Hashmap
Um hashmap (ou tabela de dispersão) é uma estrutura de dados que associa uma chave a um valor. Ou seja, é uma forma de armazenar informações onde você pode recuperar rapidamente um valor usando sua chave correspondente.

### 1. Chaves e Valores

- **Chave**: É como o "nome" que você usa para acessar o valor.
- **Valor**: É o dado que você realmente quer guardar (o "conteúdo").

Exemplo real: uma lista de telefones onde o nome da pessoa é a chave, e o telefone é o valor.

---

### 2. Hash Function (Função de Hash)

- A função de hash pega a chave e transforma em um **índice** — um número que aponta para onde o valor será armazenado na memória.
- A ideia é que essa transformação seja **rápida** e **distribua bem os dados** para evitar colisões.

---

### 3. Colisões

- **Colisão** acontece quando duas chaves diferentes geram o **mesmo índice**.
- Hashmaps precisam de uma estratégia para lidar com colisões.

Principais métodos para resolver colisões:

- **Encadeamento** (Chaining): Guardar vários itens no mesmo espaço usando uma lista ligada.
- **Endereçamento Aberto** (Open Addressing): Procurar outro espaço livre na memória.

---

### 4. Operações principais

Hashmaps precisam implementar, principalmente:

- **Inserir** (inserir um par chave-valor)
- **Buscar** (encontrar um valor pela chave)
- **Remover** (remover uma chave-valor)

## Desafio
O desafio consiste em implementar um hashmap, porém com as seguintes simplificações para não extender o projeto e a complexidade.

- Número reduzido de buckets e sem resize
- O hashing function terá que ser simples para não criar algo complexo demais.
- Os buckets serão listas normais. Portanto se houver colisões, os dados serão armazenados nessas listas e a busca será por brute force.