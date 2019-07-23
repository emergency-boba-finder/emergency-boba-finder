import React from 'react'
import { Icon, Container, Button } from 'semantic-ui-react'
import ScheduleSelector from 'react-schedule-selector'

class Schedule extends React.Component {
    state = { schedule: [] }

    handleChange = (newSchedule: any) => {
        this.setState({ schedule: newSchedule})
    }

    render() {
      return (
        <Container>
          <h1>When can you meet?</h1>
          <h3>Select the times that you're available!</h3>
          <ScheduleSelector 
            selection={this.state.schedule}
            numDays={7}
            minTime={8}
            maxTime={22}
            onChange={this.handleChange}
          />

          <Button animated>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>
        </Container>
      );
    }
  }

export default Schedule;