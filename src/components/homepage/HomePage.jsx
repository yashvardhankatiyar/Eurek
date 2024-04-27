import React from 'react';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';
import RegisterButton from '../registerButton/RegisterButton';
import CompanyCard from '../company/CompanyCard';
import myContext from '../../context/myContext';
import StudentCard from '../student/StudentCard';

function HomePage() {
  const user = JSON.parse(localStorage.getItem('users'));
  return (
    <Layout>
      {!user ? (
        <RegisterButton />
      ) : (
        <>
          {user?.role === "student" ? (
            <CompanyCard />
          ) : (
            <StudentCard />
          )}
        </>
      )}
    </Layout>
  );
}

export default HomePage;
