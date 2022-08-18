/* function textDecoder() {
  const body = document.querySelector("body");

  const header = document.createElement("header");
  body.appendChild(header);

  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("main-title");
  mainTitle.innerText = "Text Decoder";
  header.appendChild(mainTitle);

  const main = document.createElement("main");
  main.classList.add("main-container");
  body.appendChild(main);

  const formDecodedContainer = document.createElement("section");
  main.appendChild(formDecodedContainer);

  const formDecodedTextContainer = document.createElement("div");
  formDecodedTextContainer.classList.add("form-decoded-text-container");
  formDecodedContainer.appendChild(formDecodedTextContainer);

  const formDecodedText = document.createElement("form");
  formDecodedText.classList.add("form-decoded-text");
  formDecodedTextContainer.appendChild(formDecodedText);

  const decodedText = document.createElement("textarea");
  decodedText.name = "decoder";
  decodedText.classList.add("decoded-text");
  decodedText.cols = "30";
  decodedText.rows = "7";
  decodedText.placeholder = "Digite seu texto...";
  formDecodedText.appendChild(decodedText);

  const alertContainer = document.createElement("div");
  alertContainer.classList.add("alert-container");
  formDecodedContainer.appendChild(alertContainer);

  const ionIcon = document.createElement("ion-icon");
  ionIcon.name = "alert-circle-sharp";
  ionIcon.classList.add("alert-icon");
  alertContainer.appendChild(ionIcon);

  const alertDescription = document.createElement("p");
  alertDescription.classList.add("alert-description");
  alertDescription.innerText = "Apenas letras minúsculas e sem acento.";
  alertContainer.appendChild(alertDescription);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  formDecodedContainer.appendChild(buttonContainer);

  const encryptButton = document.createElement("button");
  encryptButton.classList.add("encrypt-button");
  encryptButton.innerText = "Criptografar";
  buttonContainer.appendChild(encryptButton);

  const decryptButton = document.createElement("button");
  decryptButton.classList.add("decrypt-button");
  decryptButton.innerText = "Descriptografar";
  buttonContainer.appendChild(decryptButton);

  const textResult = document.createElement("section");
  main.appendChild(textResult);

  const textResultContainer = document.createElement("div");
  textResultContainer.classList.add("text-result-container");
  textResult.appendChild(textResultContainer);

  const imgTextResult = document.createElement("img");
  imgTextResult.classList.add("img-text-result");
  imgTextResult.src = "./assets/image/decoder-image.svg";
  imgTextResult.alt =
    "Homem com uma lupa criptografando e descriptografando textos.";
  textResultContainer.appendChild(imgTextResult);

  const textResultTitle = document.createElement("h2");
  textResultTitle.classList.add("text-result-title");
  textResultTitle.innerText = "Nenhuma mensagem encontrada";
  textResultContainer.appendChild(textResultTitle);

  const textResultParagraph = document.createElement("p");
  textResultParagraph.classList.add("text-result-paragraph");
  textResultParagraph.innerText =
    "Digite o texto que você deseja criptografar ou descriptografar.";
  textResultContainer.appendChild(textResultParagraph);

  const formResultParagraphContainer = document.createElement("div");
  formResultParagraphContainer.classList.add("form-result-paragraph-container");
  textResultContainer.appendChild(formResultParagraphContainer);

  const formResultParagraph = document.createElement("form");
  formResultParagraph.classList.add("form-result-paragraph");
  formResultParagraphContainer.appendChild(formResultParagraph);

  const textareaResultParagraph = document.createElement("textarea");
  textareaResultParagraph.classList.add("textarea-result-paragraph");
  textareaResultParagraph.cols = "30";
  textareaResultParagraph.rows = "7";
  formResultParagraph.appendChild(textareaResultParagraph);

  const copyButton = document.createElement("button");
  copyButton.classList.add("copy-button");
  copyButton.innerText = "Copiar";
  textResultContainer.appendChild(copyButton);

  const footerBottom = document.createElement("footer");
  footerBottom.classList.add("footer-bottom");
  body.appendChild(footerBottom);

  const container = document.createElement("div");
  container.classList.add("container");
  footerBottom.appendChild(container);

  const copyright = document.createElement("p");
  copyright.classList.add("copyright");
  copyright.innerText = "© 2022 Text Decoder. All Rights Reserved By ";
  container.appendChild(copyright);

  const copyrightLink = document.createElement("a");
  copyrightLink.classList.add("copyright-link");
  copyrightLink.href = "https://github.com/herbertcaiosama";
  copyrightLink.target = "_blank";
  copyrightLink.innerText = "devherbert.";
  copyright.appendChild(copyrightLink);

  const footerBottomList = document.createElement("ul");
  footerBottomList.classList.add("footer-bottom-list");
  container.appendChild(footerBottomList);

  const listItem1 = document.createElement("li");
  footerBottomList.appendChild(listItem1);

  const bottomLinkIcon1 = document.createElement("a");
  bottomLinkIcon1.classList.add("bottom-link-icon");
  bottomLinkIcon1.href = "#";
  bottomLinkIcon1.target = "_blank";
  listItem1.appendChild(bottomLinkIcon1);

  const link1 = document.createElement("ion-icon");
  link1.name = "link";
  bottomLinkIcon1.appendChild(link1);

  const footerBottomLink1 = document.createElement("a");
  footerBottomLink1.classList.add("footer-bottom-link");
  footerBottomLink1.classList.add("has-before");
  footerBottomLink1.href = "#";
  footerBottomLink1.target = "_blank";
  footerBottomLink1.innerText = "Privacy Policy";
  listItem1.appendChild(footerBottomLink1);

  const listItem2 = document.createElement("li");
  footerBottomList.appendChild(listItem2);

  const bottomLinkIcon2 = document.createElement("a");
  bottomLinkIcon2.classList.add("bottom-link-icon");
  bottomLinkIcon2.href = "#";
  bottomLinkIcon2.target = "_blank";
  listItem2.appendChild(bottomLinkIcon2);

  const link2 = document.createElement("ion-icon");
  link2.name = "link";
  bottomLinkIcon2.appendChild(link2);

  const footerBottomLink2 = document.createElement("a");
  footerBottomLink2.classList.add("footer-bottom-link");
  footerBottomLink2.classList.add("has-before");
  footerBottomLink2.href = "#";
  footerBottomLink2.target = "_blank";
  footerBottomLink2.innerText = "Terms & Condition";
  listItem2.appendChild(footerBottomLink2);
}

textDecoder(); */