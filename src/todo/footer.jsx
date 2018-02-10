import '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'YangJing'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>Written by {this.author} </span>
      </div>
    )
  }
}
