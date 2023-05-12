import Layout from '../../components/layout/layout'
import style from './desktop.module.css'

const Desktop = () => {
  return (
    <Layout>
      <img
        className={style.img}
        src='./d-d-logo.png'
        alt=''
      />
      <p>This is a initiative from a geek guy that loves to play Dungeons and Dragons</p>
    </Layout>
  )
}

export default Desktop
