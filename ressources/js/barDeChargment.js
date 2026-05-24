const bar = document.getElementById('bar');
    const startBtn = document.getElementById('start');
    const resetBtn = document.getElementById('reset');

    let progress = 0;
    let intervalId = null;

    function updateBar(value) {
      progress = Math.max(1, Math.min(100, value));
      bar.style.width = progress + '%';
      bar.textContent = progress + '%';
    }

    function startLoading(duration = 4000) {
      if (intervalId) return;
      const start = performance.now();
      const from = progress;
      const target = 100;

      intervalId = requestAnimationFrame(function step(ts) {
        const elapsed = ts - start;
        const t = Math.min(1, elapsed / duration);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(from + (target - from) * eased);
        updateBar(current);
        if (t < 1) {
          intervalId = requestAnimationFrame(step);
        } else {
          intervalId = null;
        }
      });
    }

    startBtn.addEventListener('click', () => startLoading(30));
    resetBtn.addEventListener('click', () => {
      if (intervalId) { cancelAnimationFrame(intervalId); intervalId = null; }
      updateBar(0);
    });
