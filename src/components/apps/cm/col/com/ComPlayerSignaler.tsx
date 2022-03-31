
  class TheComPlayerSignaler {
    constructor() {
      super();
      
      this.state = {
        pulse: false,
        active: false,
      };
      
      this.short = true;
      this.closingTime = 1500;
    }
    
    interval(setNext) {
      //if (setNext) setTimeout(() => this.setState({ pulse: !this.state.pulse }), (this.short = !this.short) ? 500 : 100);
      return null;
    }
    
    fu() {
      this.forceUpdate();
    }
    
    render() {
      return g.rollMode
        ? ce('div',
          {
            key: 'com-player-signaler-panel',
            className: `com-player-signaler-panel ${this.state.closing ? 'closing' : ''} ${g.rollMode || 'stop'}-mode`,
          },
          ce('div',
            {
              className: 'speed-panel',
            },
            [
              'plus',
              '',
              'minus'
            ].map((sign, signi) => {
              const isActive = g.actions.com.isSpeedRollKfSetterActive(signi);
              
              return ce('div',
                {
                  key: `${sign}-sign of speed`,
                  className: 'sign-digit',
                  onClick: event => {
                    event.stopPropagation();
                    if (!isActive || !sign) return;
                    g.actions.com.updateSpeedRollKf(signi ? 1 : -1);
                    this.fu();
                  },
                  onTouchStart: event => {
                    event.stopPropagation();
                  }
                },
                sign ? svg(`${sign}-square${isActive ? '' : '-outline'}`) : g.actions.com.speedRollKfLabel
              );
            })
          ),
          ce('div',
            {
              key: 'com-player-signaler',
              className: `com-player-signaler ${this.state.pulse ? 'pulse' : ''} ${this.state.active ? 'active' : ''} ${this.state.closing ? 'closing' : ''}`,
              style: {
                '--slosing-time-kf': this.closingTime,
              },
              onClick: event => {
                event.stopPropagation();
              },
              onTouchStart: event => {
                this.setState({ closing: true });
                this.closingTimeout = setTimeout(() => {
                  g.rollMode = null;
                  g.rollModeMarks = false;
                  g.ss();
                  this.setState({ closing: false });
                  g.updateFlexFontSize(400);
                }, this.closingTime);
              },
              onTouchEnd: event => {
                this.setState({ closing: false });
                clearTimeout(this.closingTimeout);
              }
            },
            //this.interval(true),
            svg('music-outline'),
            ce('span',
              {
                key: 'com-player-signaler-num',
                className: 'num',
              },
              ''
            )
          )
        )
      : this.interval(false);
    }
  }