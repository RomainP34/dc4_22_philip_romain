function ft_print_comb() {
    for (let i = 0; i <= 7; i++) {
      for (let j = i + 1; j <= 8; j++) {
        for (let k = j + 1; k <= 9; k++) {
          console.log(`${i} ${j} ${k}`);
        }
      }
    }
  }

  ft_print_comb();