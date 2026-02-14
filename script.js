// Borked UI Jam — Delightfully Broken Behaviors

document.addEventListener('DOMContentLoaded', () => {
  const cursorFake = document.getElementById('cursorFake');
  const submitBtn = document.getElementById('submitBtn');
  const fakeSubmit = document.getElementById('fakeSubmit');
  const realSubmit = document.getElementById('realSubmit');
  const submitForm = document.getElementById('submitForm');
  const loadingScreen = document.getElementById('loadingScreen');
  const loadingText = document.getElementById('loadingText');
  const successModal = document.getElementById('successModal');
  const closeSuccess = document.getElementById('closeSuccess');
  const gameName = document.getElementById('gameName');
  const gameLink = document.getElementById('gameLink');
  const category = document.getElementById('category');
  const agree1 = document.getElementById('agree1');
  const agree2 = document.getElementById('agree2');
  const cookieModal = document.getElementById('cookieModal');
  const mainTitle = document.getElementById('mainTitle');

  // ----- Fake cursor (offset so clicks feel wrong)
  let mouseX = 0, mouseY = 0;
  const OFFSET = 30;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorFake.style.left = (e.clientX + OFFSET) + 'px';
    cursorFake.style.top = (e.clientY + OFFSET) + 'px';
  });

  // ----- Runaway Submit button
  function moveSubmitButton() {
    const zone = submitBtn.parentElement.getBoundingClientRect();
    const btnRect = submitBtn.getBoundingClientRect();
    const maxX = zone.width - btnRect.width - 20;
    const maxY = zone.height - btnRect.height - 20;
    const newX = Math.random() * Math.max(0, maxX);
    const newY = Math.random() * Math.max(0, maxY);
    submitBtn.style.position = 'absolute';
    submitBtn.style.left = newX + 'px';
    submitBtn.style.top = newY + 'px';
  }

  submitBtn.addEventListener('mouseenter', moveSubmitButton);
  submitBtn.addEventListener('focus', moveSubmitButton);

  // ----- "Submit" buttons: only the runaway one triggers the fake flow
  function showLoadingThenSuccess() {
    loadingScreen.classList.add('visible');
    const messages = [
      'Submitting to the void...',
      'Connecting to server (there is no server)...',
      'Almost there (no we\'re not)...',
      'Error: success?',
      'Please wait forever...'
    ];
    let i = 0;
    const interval = setInterval(() => {
      loadingText.textContent = messages[i % messages.length];
      i++;
    }, 800);
    setTimeout(() => {
      clearInterval(interval);
      loadingScreen.classList.remove('visible');
      successModal.classList.add('visible');
      closeClicks = 0;
      closeSuccess.textContent = 'Close (it does nothing)';
    }, 3000);
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showLoadingThenSuccess();
  });

  fakeSubmit.addEventListener('click', () => {
    fakeSubmit.textContent = 'Nice try. Click the other one.';
    setTimeout(() => { fakeSubmit.textContent = 'No, Submit HERE'; }, 2000);
  });

  realSubmit.addEventListener('click', () => {
    realSubmit.textContent = 'Nope. The green one. Maybe.';
    setTimeout(() => { realSubmit.textContent = 'Actually HERE'; }, 2000);
  });

  // ----- Form: prevent real submit
  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showLoadingThenSuccess();
  });

  // ----- Game name: only allow 5 chars and invert logic
  gameName.addEventListener('input', () => {
    if (gameName.value.length > 5) {
      gameName.value = gameName.value.slice(0, 5);
    }
    document.querySelector('.char-count').textContent = `${gameName.value.length}/5 chars (yes, 5 max)`;
  });

  // ----- Category dropdown: change on its own sometimes
  const options = ['', 'best', 'worst', 'yes'];
  let optionIndex = 0;
  setInterval(() => {
    optionIndex = (optionIndex + 1) % options.length;
    category.value = options[optionIndex];
  }, 4000);

  // ----- Checkboxes: second one controls the first
  agree2.addEventListener('change', () => {
    agree1.checked = agree2.checked;
  });

  agree1.addEventListener('change', () => {
    // First one tries to stay independent but we can leave it or invert
    if (!agree2.checked && agree1.checked) {
      setTimeout(() => { agree2.checked = true; }, 100);
    }
  });

  // ----- Cookie modal: both buttons do the same (close)
  document.querySelectorAll('.modal-overlay .btn').forEach(btn => {
    btn.addEventListener('click', () => {
      cookieModal.classList.add('hidden');
    });
  });

  // ----- Success modal close button: does nothing the first few times
  let closeClicks = 0;
  closeSuccess.addEventListener('click', () => {
    closeClicks++;
    if (closeClicks >= 3) {
      successModal.classList.remove('visible');
      closeClicks = 0;
    } else {
      closeSuccess.textContent = `Close (${3 - closeClicks} more clicks)`;
    }
  });

  // ----- Title: occasionally change text
  const titles = [
    'Borked UI Jam — Submit Here!',
    'Borked UI Jam — The top best',
    'Submit Your Entry (Trust Me)',
    'Borked UI Jam — Where UX goes to die',
    'Submit Here (the button runs away)'
  ];
  setInterval(() => {
    mainTitle.textContent = titles[Math.floor(Math.random() * titles.length)];
  }, 5000);

  // ----- Link input: swap placeholder on focus
  gameLink.addEventListener('focus', () => {
    gameLink.placeholder = 'Just kidding, type anything';
  });
  gameLink.addEventListener('blur', () => {
    gameLink.placeholder = 'https://nothing.itch.io/nothing';
  });
});
