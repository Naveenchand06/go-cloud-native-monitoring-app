


function updateInfo() {
  fetch("/data")
    .then((response) => response.json())
    .then((data) => {
      let cpu = data.CPUPercent;
      let memory = data.MemoryUsage;

      let cpuStatus = document.getElementById("cpu")
      cpuStatus.style.height = `${cpu}%`;
      cpuStatus.innerHTML = `${cpu.toFixed(2)}%`;
      let memoryStatus = document.getElementById("memory")
      memoryStatus.style.height = `${memory}%`;
      memoryStatus.innerHTML = `${memory.toFixed(2)}%`;
    });
}

updateInfo();
setInterval(updateInfo, 1000);