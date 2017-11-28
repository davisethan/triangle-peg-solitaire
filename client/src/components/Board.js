import React from 'react'

export default class Board extends React.Component {
  render() {
    const screenWidth = window.screen.width
    const margin = 16
    const padding = 16
    let radius,
      width,
      height,
      strokeWidth,
      r

    if (screenWidth >= 768) {
      // Tablets or larger
      radius = (768 - 2 * margin - 2 * padding) / 9 / 2
      width = 768 - 2 * margin
      height = 5 * (2 * radius) + 2 * padding
      strokeWidth = radius / 4
      r = radius - strokeWidth / 2
    } else {
      // Mobile
      radius = (screenWidth - 2 * margin - 2 * padding) / 9 / 2
      width = screenWidth - 2 * margin
      height = 5 * (2 * radius) + 2 * padding
      strokeWidth = radius / 4
      r = radius - strokeWidth / 2
    }

    return (
      <div>
        <svg height={height} width={width}>
          {
      this.props.marbles.map((marble, index) => {
        switch (index) {
          case 0:
            return <circle key={index} cx={9 * radius + padding} cy={radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 1:
            return <circle key={index} cx={7 * radius + padding} cy={3 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 2:
            return <circle key={index} cx={11 * radius + padding} cy={3 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 3:
            return <circle key={index} cx={5 * radius + padding} cy={5 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 4:
            return <circle key={index} cx={9 * radius + padding} cy={5 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 5:
            return <circle key={index} cx={13 * radius + padding} cy={5 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 6:
            return <circle key={index} cx={3 * radius + padding} cy={7 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 7:
            return <circle key={index} cx={7 * radius + padding} cy={7 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 8:
            return <circle key={index} cx={11 * radius + padding} cy={7 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 9:
            return <circle key={index} cx={15 * radius + padding} cy={7 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 10:
            return <circle key={index} cx={radius + padding} cy={9 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 11:
            return <circle key={index} cx={5 * radius + padding} cy={9 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 12:
            return <circle key={index} cx={9 * radius + padding} cy={9 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 13:
            return <circle key={index} cx={13 * radius + padding} cy={9 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          case 14:
            return <circle key={index} cx={17 * radius + padding} cy={9 * radius + padding} r={r} fill={marble.fill} stroke={marble.stroke} strokeWidth={strokeWidth} index={index} onClick={this.props.onMarbleClick} />
          default:
            return
        }
      })
      }
        </svg>
      </div>
    )
  }
}
