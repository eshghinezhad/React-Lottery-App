import React from 'react';
import Button from '@mui/material/Button';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function Cash({ handleMoney, handleCash }) {
  const amounts = [1, 5, 10, 20];
  return (
      <>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', margin: '16px 0', flexWrap: 'wrap' }}>
          {amounts.map((amount) => (
            <Button
              key={amount}
              variant="contained"
              color="warning"
              onClick={() => handleMoney(amount)}
              sx={{
                margin: '4px',
                minWidth: '64px',
                minHeight: '64px',
                borderRadius: '50%',
                boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontWeight: 'bold',
                fontSize: '1rem',
                padding: 0,
              }}
            >
              <MonetizationOnIcon sx={{ fontSize: 37, mb: 0.5 }} /> {/*Add $ Icon on the Button*/}
              {amount}  
            </Button>
          ))}
        </div>
        <div className="cash">
          <Button
            variant="contained"
            color="primary"
            onClick={handleCash}
            sx={{minWidth: '100px', fontWeight: 'bold', fontSize: '0.95rem' }}
          >
            Cash
          </Button>
        </div>
      </>
  );
}

export default Cash;
