var revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(function(el) {
  revealObserver.observe(el);
});

var steps = document.querySelectorAll('.hero-step');
var stepSections = document.querySelectorAll('.step-section');

steps.forEach(function(step, index) {
  step.addEventListener('click', function() {
    steps.forEach(function(s) {
      s.classList.remove('active');
    });

    step.classList.add('active');

    var target = document.getElementById('step-' + (index + 1));

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

var stepObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var id = entry.target.id;
      var index = parseInt(id.replace('step-', '')) - 1;

      steps.forEach(function(s) {
        s.classList.remove('active');
      });

      if (steps[index]) {
        steps[index].classList.add('active');
      }
    }
  });
}, {
  threshold: 0.5
});

stepSections.forEach(function(section) {
  stepObserver.observe(section);
});
