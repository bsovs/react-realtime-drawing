import React, { useState } from 'react';
import { useRealtimeDrawer, useRealtimeViewer } from 'react-realtime-draw';

const colors = ['#626262', '#97ad7d', '#ca4400'];
const widths = [8, 16, 32];

const App = () => {
  const [color, setColor] = useState('#626262');
  const [strokeWidth, setStrokeWidth] = useState(widths[1]);

  const [viewerRef, onChange, { reset: resetViewer }] = useRealtimeViewer();

  const [drawerRef, { reset: resetDrawer }] = useRealtimeDrawer({
    color,
    strokeWidth,
    onChange,
  });

  return (
    <div>
      <div style={{ height: 512, width: 512 }}>
        <canvas ref={drawerRef} />
      </div>
      <div>
        <div>
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              style={{ ...styles.button, background: c }}
            />
          ))}
        </div>
        <div>
          {widths.map((w) => (
            <button
              key={w}
              onClick={() => setStrokeWidth(w)}
              style={{ ...styles.button }}
            >
              {w}
            </button>
          ))}
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            resetDrawer();
            resetViewer();
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <div style={{ height: 512, width: 512 }}>
          <canvas ref={viewerRef} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  button: {
    background: '#f1f1f1',
    height: 32,
    width: 32,
    border: 0,
    outline: 0,
  },
};

export default App;
