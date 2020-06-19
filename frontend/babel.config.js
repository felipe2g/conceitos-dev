module.exports = {
  presets: [
    /* Converte o código de js moderno para js mais antigo de acordo 
    com o ambiente que esta rodando o código*/
    '@babel/preset-env',
    /* Adiciona as funcionalidades do react na conversão do babel*/
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ],
}