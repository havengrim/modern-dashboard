import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@mui/lab';
import { Box, Typography } from '@mui/material';

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
            <Typography variant="h6" component="h3" className='text-base'>
              Transaction Assets
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              2 hours ago
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Short description of the transaction goes here.
          </Typography>
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
            <Typography variant="h6" component="h3" className='text-base'>
              Transaction Assets
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              2 hours ago
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Short description of the transaction goes here.
          </Typography>
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
            <Typography variant="h6" component="h3" className='text-md'>
              Transaction Assets
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              2 hours ago
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Short description of the transaction goes here.
          </Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
);

export default ShortTimeline;
