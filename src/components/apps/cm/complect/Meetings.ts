
  class IMeetings extends g.IEditableMeetings {
    constructor(stack) {
      super();

      this.stack = stack.map(meeting => new IMeeting(meeting));
    }
  }