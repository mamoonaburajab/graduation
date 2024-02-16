import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const HealthCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="baby">
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="صحة الطفل والأم"
        subheader="14 فبراير، 2024"
      />
      <CardMedia
        component="img"
        height="194"
        // Replace the image path with your actual image
        image="https://www.parents.com/thmb/GExGCp2zHxDIKxnCtx4QykPFqAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1407570793-5f7481ec66794bdb8f67f27f1a9cf6d2.jpg"
        alt="صحة الطفل"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" textAlign="right">
          تأكيد صحة الطفل والأم أمر حيوي لضمان نموهما السليم وسعادتهما. فيما يلي بعض النصائح للعناية بصحة الطفل:
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="أضف إلى المفضلة">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="شارك">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="عرض المزيد"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>نصائح للعناية بصحة الطفل:</Typography>
          <Typography paragraph>
            1. اتباع نظام غذائي صحي يحتوي على العناصر الغذائية الضرورية لنموهم السليم.
          </Typography>
          <Typography paragraph>
            2. توفير بيئة نظيفة وآمنة للطفل لتجنب المخاطر.
          </Typography>
          <Typography paragraph>
            3. جدول منتظم للفحوصات الصحية والتطعيمات المطلوبة.
          </Typography>
          <Typography paragraph>
            4. تعزيز التفاعل الإيجابي واللعب لتنمية مهاراتهم وشخصيتهم.
          </Typography>
          <Typography paragraph>
            5. الاستماع والاستجابة لاحتياجات الطفل بشكل فعّال.
          </Typography>
          <Typography>
            اتباع هذه النصائح يسهم في بناء أساس قوي لصحة الطفل والأم وتحقيق رفاهية العائلة.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default HealthCard;
