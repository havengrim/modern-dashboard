import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@mui/lab';
import { Box } from '@mui/material';

const ShortTimeline = () => (
  <Timeline
    sx={{
      padding: 0,
      '& .MuiTimelineItem-root::before': { 
        flex: 0, 
        padding: 0,
        content: 'none',
      },
    }}
  >
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot sx={{ bgcolor: 'primary.main', width: '20px', height: '20px', borderRadius: '8px' }} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box display="flex" flexDirection="column">
          <Box display="flex" justifyContent="space-between">
            <h3 className='sm:text-base text-sm text-gray-500'>Transaction Assets</h3>
            <span className='sm:text-sm text-xs text-gray-500'>2 hours ago</span>
          </Box>
          <p className='sm:text-sm text-xs text-gray-400'>
            Short description of the transaction goes here.
          </p>

        </Box>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot sx={{ bgcolor: 'primary.main', width: '20px', height: '20px', borderRadius: '8px' }} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box display="flex" flexDirection="column">
          <Box display="flex" justifyContent="space-between">
            <h3 className='sm:text-base text-sm text-gray-500'>Transaction Assets</h3>
            <span className='sm:text-sm text-xs text-gray-500'>2 hours ago</span>
          </Box>
          <p className='sm:text-sm text-xs text-gray-400'>
            Short description of the transaction goes here.
          </p>

        </Box>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot sx={{ bgcolor: 'primary.main', width: '20px', height: '20px', borderRadius: '8px' }} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box display="flex" flexDirection="column">
          <Box display="flex" justifyContent="space-between">
            <h3 className='sm:text-base text-sm text-gray-500'>Transaction Assets</h3>
            <span className='sm:text-sm text-xs text-gray-500'>2 hours ago</span>
          </Box>
          <p className='sm:text-sm text-xs text-gray-400'>
            Short description of the transaction goes here.
          </p>
        </Box>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
);

export default ShortTimeline;
