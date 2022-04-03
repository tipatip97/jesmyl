
  class TheChordCard extends g.CEditableChordCard {
    constructor(props) {
      super(props);
      this.stringsCount = 6;
      
      this.chordName = this.props.chordName || `?`;
      this.chordLabel = this.props.chordLabel;
      this.track = window.json.chords[this.chordName] || [0];
      
      this.strings = [];
      for (let i = 1; i <= this.stringsCount; i++)
        this.strings.push(i);
    }

    getPoints(poss, i) {
      const x = i * this.betweenLad - this.betweenLad / 2;
      if (!~poss)
        return ce('polyline', {
          key: `point-${poss}...${i}`,
          className: 'chord-point',
          points: `${x},${this.betweenStr / 2} ${x},${this.betweenStr * this.stringsCount - this.betweenStr / 2}`
        });
      
      const points = [];
      
      [].concat(poss).forEach((pos) => {
        const y = this.betweenStr * pos - this.betweenStr / 2;
        points.push(
          ce('polyline', {
            key: `chord-point-${pos}`,
            className: 'chord-point',
            points: `${x},${y} ${x},${y}`,
            onClick: this.onPointClick(poss, i, pos)
          }));
      });
      return points;
    }

    render() {
      this.betweenStr = 20 + (this.track[0] * .3);
      this.betweenLad = 80 - (this.track[0] * .7);
      const isFLad = this.track[0] === 0;

      const isRedaction = this.props.isRedaction;

      const lads = this.lads = [];
      
      for (let i = 1; i <= (this.track.length > 4 ? this.track.length - 1 : 3); i++)
        lads.push(i);

      const stringLength = this.betweenLad * lads.length;
      
      return [
        ce('span', {
          key: `first-lad-counter-${this.chordName}`,
          className: 'first-lad-counter',
          onClick: this.onLabelClick
        }, (this.chordLabel || this.chordName) + (this.track[0] ? ` [${this.track[0] + 1}]` : '')),
        ce('svg',
          {
            key: `chord-board:${this.chordName}`,
            className: 'chord-board',
            style: {
              width: stringLength + 3.5,
              height: this.betweenStr * this.stringsCount + (isRedaction ? this.betweenLad / 5 + 3 : 0)
            }
          },
          [
            ce('polyline', { // zero line
              key: `zero-line.${this.chordName}`,
              points: `2,0 2,${this.betweenStr * this.stringsCount}`,
              className: !isFLad ? 'chord-lad' : 'chord-zero-line'
            }),
            lads.map(ladPos => {
              const x = this.betweenLad * ladPos;

              return ce('polyline', {
                points: `${x},0 ${x},${this.betweenStr * this.stringsCount}`,
                className: 'chord-lad',
                key: `chord-lad_${ladPos}:${this.chordName}`
              });
            }),
            this.strings.map(stringPos => {
              const y = this.betweenStr * stringPos - this.betweenStr / 2;

              return ce('polyline', {
                points: `0,${y} ${stringLength + 3.5},${y}`,
                key: `chord-string-${stringPos}:${this.chordName}`,
                className: 'chord-string',
                strokeWidth: .5 + stringPos / 5
              });
            }),
            this.track.map((stage, stagei) => stagei === 0 || !stage ? null : this.getPoints(stage, stagei)),
            this.buttons,
          ])
      ];
    }
  }
