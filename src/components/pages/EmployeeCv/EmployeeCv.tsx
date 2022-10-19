import { FC, SyntheticEvent, useContext, useEffect } from 'react';
import { IconButton, Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { PathEnum } from '@templates/router/router.types';
import { TemplateCv } from '@pages/EmployeeCv/EmployeeCv.styles';
import { WrapRow } from '@atoms/wrap-row';
import { Add } from '@mui/icons-material';
import { EmployeeDetailsContext } from '@templates/employee-details-tabs/employee-details.context';
import { getPathToCvs } from '@utils/getPathToCv';
import { theme } from '@templates/app/app.theme';
import { PageHeaderStore } from '@store/PageHeaderStore/PageHeaderStore';

const EmployeeCv: FC = () => {
  const { userCvs, setCvTab, cvTab } = useContext(EmployeeDetailsContext);
  const wideScreen = useMediaQuery(theme.breakpoints.up('md'));

  const { id, cvId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    PageHeaderStore.setPageInfo({ header: 'Employee', description: "Employee's CV" });
  }, []);

  useEffect(() => {
    if (cvId && !userCvs.find((cv) => cv.id === cvId)) {
      navigate(getPathToCvs(userCvs, id as string));
    }
  }, [userCvs]);

  const handleChange = (event: SyntheticEvent, newValue: string) => setCvTab(newValue);

  return (
    <TemplateCv>
      <Tabs
        value={cvTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        orientation={wideScreen ? 'vertical' : 'horizontal'}
      >
        {userCvs.map(({ id: cvId, name }) => (
          <Tab
            key={cvId}
            value={name}
            label={name}
            component={Link}
            to={PathEnum.cvDetails.replace(':id', id as string).replace(':cvId', cvId)}
          />
        ))}
        <WrapRow>
          <IconButton>
            <Add />
          </IconButton>
        </WrapRow>
      </Tabs>

      {!userCvs.length && (
        <Typography variant="h4" textAlign="center">
          {"The user doesn't have any CVs"}
        </Typography>
      )}

      <Outlet />
    </TemplateCv>
  );
};

export default EmployeeCv;
