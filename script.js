      const end = new Date("2025-06-15T00:00:00").getTime();
      setInterval(() => {
        let t = end - Date.now();
        if (t <= 0) return document.getElementById("countdown").innerText = "🎉 Event Ended!";
        let d = String(Math.floor(t / 86400000)).padStart(2, '0'),
            h = String(Math.floor(t / 3600000) % 24).padStart(2, '0'),
            m = String(Math.floor(t / 60000) % 60).padStart(2, '0'),
            s = String(Math.floor(t / 1000) % 60).padStart(2, '0');
        document.getElementById("days").innerText = d;
        document.getElementById("hours").innerText = h;
        document.getElementById("minutes").innerText = m;
        document.getElementById("seconds").innerText = s;
      }, 1000);