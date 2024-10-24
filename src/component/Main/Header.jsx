

const Header = ({topheader, mainheader}) => {
  return (
    <div>
      <p className="text-xl text-custom-red text-center">{topheader}</p>
      <h1 className="text-2xl md:text-3xl font-playfair font-bold lg:text-[50px] pt-2 text-center">{mainheader}</h1>
    </div>
  )
}

export default Header
