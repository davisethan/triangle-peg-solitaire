import React from 'react'

export default class Board extends React.Component {
  render() {
    return (
      <div>
        <svg height='400' width='720'>
          {
      this.props.marbles.map((marble, index) => {
        switch (index) {
          case 0:
            return <circle key={index} cx='360' cy='40' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 1:
            return <circle key={index} cx='280' cy='120' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 2:
            return <circle key={index} cx='440' cy='120' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 3:
            return <circle key={index} cx='200' cy='200' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 4:
            return <circle key={index} cx='360' cy='200' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 5:
            return <circle key={index} cx='520' cy='200' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 6:
            return <circle key={index} cx='120' cy='280' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 7:
            return <circle key={index} cx='280' cy='280' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 8:
            return <circle key={index} cx='440' cy='280' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 9:
            return <circle key={index} cx='600' cy='280' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 10:
            return <circle key={index} cx='40' cy='360' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 11:
            return <circle key={index} cx='200' cy='360' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 12:
            return <circle key={index} cx='360' cy='360' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 13:
            return <circle key={index} cx='520' cy='360' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
          case 14:
            return <circle key={index} cx='680' cy='360' r='35' fill={marble.fill} stroke={marble.stroke} strokeWidth='10' index={index} onClick={this.props.onMarbleClick} />
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
