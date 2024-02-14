import React from 'react';

export default function Location() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1493.27262185256!2d-83.3678135!3d42.4410743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824b1ecf36b2a73%3A0x8b2cfea4f7fb5486!2sSeven%20Stars%20Logistics%20LLC!5e1!3m2!1sen!2s!4v1707932289925!5m2!1sen!2s"
        width="100%"
        height="800"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
