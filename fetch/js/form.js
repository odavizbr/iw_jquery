$(document).ready(function () {
    // pegar os elementos
    let $bt = $("button");
    let $cep = $("#cep");
    let $endereco = $("#endereco");
    let $complemento = $("#complemento");
    let $bairro = $("#bairro");
    let $cidade = $("#cidade");
    let $nr = $("#nr");
    let $uf = $("#uf");

    // evento click
    $bt.on("click", function () {
        let servidor = "https://viacep.com.br/ws/" + $cep.val() + "/json/";

        $.getJSON(servidor, function (data) {
            $endereco.val(data["logradouro"]);
            $complemento.val(data["complemento"]);
            $bairro.val(data["bairro"]);
            $cidade.val(data["localidade"]);
            $nr.val(data["unidade"]);
            $uf.val(data["uf"]);

            // Exemplo para criar um div com os dados, se necessário
            /*let $div = $("<div></div>");
            for (let key in data) {
                let $p = $("<p></p>").text(`${key.toUpperCase()}: ${data[key]}`);
                $div.append($p);
            }
            $("#json").append($div);*/
        }).fail(function (err) {
            console.error(err);
        });
    });
});
