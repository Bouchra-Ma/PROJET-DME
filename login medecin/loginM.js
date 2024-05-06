document.getElementById('loginButton').addEventListener('click', function() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email === '' || password === '') {
      alert('Veuillez remplir les champs email et mot de passe.');
  } else {
      document.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)';
      // Ici, vous pouvez ajouter le code pour le processus de connexion
  }
});

document.getElementById('signupButton').addEventListener('click', function() {
  var inputs = document.querySelectorAll('.signup-row input');
  var allFilled = true;

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
          allFilled = false;
          break;
      }
  }

  if (!allFilled) {
      alert('Veuillez remplir tous les champs pour l\'inscription.');
  } else {
      // Ici, vous pouvez ajouter le code pour le processus d'inscription
  }
});
function validation_compte() {
    var nom = document.querySelector('input[placeholder="Nom"]').value;
    var prenom = document.querySelector('input[placeholder="Prénom"]').value;
    var Spécialité = document.querySelector('input[placeholder="Spécialité"]').value;
    var LieuTravail = document.querySelector('input[placeholder="Lieu de travail"]').value;
    
    if (!nom || !prenom || !Spécialité || !LieuTravail ) {
        alert('Veuillez remplir tous les champs pour l\'inscription.');
        return false; // Empêche le formulaire de s'envoyer.
    }
    
    // Si tout est rempli, vous pouvez continuer avec le processus d'inscription
    // ...
}