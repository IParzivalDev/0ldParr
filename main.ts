const handleClick = () => {
  const audio = document.querySelector(".honeypie") as HTMLAudioElement
  const happybirthdate = document.querySelector(".happybirthdate") as HTMLDivElement
  const button = document.querySelector(".but") as HTMLDivElement
  audio.play()

  happybirthdate.style.display = "flex"
  button.style.display = "none"
}