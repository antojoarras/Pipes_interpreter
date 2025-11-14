const pipe_to_number = {
  "||": "1", "||||": "2", "||||||": "3", "||||||||": "4",
  "||||||||||": "5", "||||||||||||": "6", "||||||||||||||": "7",
  "||||||||||||||||": "8", "||||||||||||||||||": "9",
  "||||||||||||||||||||": "0"
};

const number_to_pipe = {};
for (let k in pipe_to_number) number_to_pipe[pipe_to_number[k]] = k;

function num_to_pe(num) {
  return [...String(num)]
    .map(n => number_to_pipe[n])
    .join("i");
}

function pe_to_num(pe) {
  return parseInt(pipe_to_number[pe]);
}

function pipetopy(code) {
  const lines = code.split("I");
  return lines.map(line => {
    const pipes = line.trim().split("l");
    let out = "";
    for (const pipe of pipes) {
      let rr = "";
      for (const pp of pipe.split("i")) {
        if (pp !== "") rr += pe_to_num(pp);
      }
      if (rr !== "") out += String.fromCharCode(parseInt(rr));
    }
    return out;
  }).join("\n");
}

function pytopipe(code) {
  return code.split("\n").map(line => {
    return [...line]
      .map(ch => num_to_pe(ch.codePointAt(0)))
      .join("l");
  }).join("I\n");
}

function run() {
  const input = document.getElementById("input").value;
  document.getElementById("output").textContent = pipetopy(input);
}
