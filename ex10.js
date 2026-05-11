function ex10() {
    alert("Folha de pagamento");
    let nome = prompt("Informe seu nome");
    let bruto = Number(prompt("Informe seu salario bruto: "));

    let desconto = bruto * 0.08
    let liquido = bruto - desconto

    alert(
        "Folha de pagamento\n" +
        "Nome:  " + nome + "\n" +
        "Salário bruto: " + bruto + "\n" +
        "Desconto INSS (8%): " + desconto + "\n" +
        "Salário líquido: " + liquido
    );
}