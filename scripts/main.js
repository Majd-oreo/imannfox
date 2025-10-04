const introImage = document.createElement('img');
introImage.src = 'images/intro-image.jpg'; // Replace with the actual image path
introImage.alt = "Welcome to Iman's Website";
document.body.appendChild(introImage);

const thankYouLetter = document.createElement('div');
thankYouLetter.innerHTML = `
    <h1 style="color: red;">Thank You, Iman!</h1>
    <p>Dear Iman,</p>
    <p>Thank you for being such a wonderful friend and for all the support you've given me. Your kindness and enthusiasm inspire me every day. I hope this website brings a smile to your face!</p>
    <p>With love,</p>
    <p>Your Friend</p>
`;
document.body.appendChild(thankYouLetter);