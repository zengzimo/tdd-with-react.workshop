import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Product.css'

class Product extends Component {
  render() {
    const { code, count } = this.props.product
    return (
      <div className="product">
        <h3 className="code"><a href={`/products/${code}`}>商品编号：{code}</a></h3>
        <div className="actions">
          <button className="minus" onClick={this.minusCount}>-</button>
          <span>数量 {count}</span>
          <button className="plus" onClick={this.plusCount}>+</button>
        </div>
      </div>
    )
  }

  minusCount = () => {
    const { product, onChangeCount } = this.props
    if (product.count > 1) {
      onChangeCount({
        ...product,
        count: product.count - 1,
      })
    }
  }

  plusCount = () => {
    const { product, onChangeCount } = this.props
    onChangeCount({
      ...product,
      count: product.count + 1,
    })
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onChangeCount: PropTypes.func.isRequired,
}
Product.defaultProps = {}

export default Product
