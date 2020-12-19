# Co-Make-33

## back-end

<br/>

---

<br/>
<table>
  <tbody>
    <tr>
      <th>Auth</th>
      <th ></th>
      <th ></th>
    </tr>
    <tr>
      <td>GET</td>
      <td >api/auth/logout</td>
      <td ></td>
    </tr>
    <tr>
      <td>POST</td>
      <td >api/auth/login</td>
      <td >
        <ul>
          <li>username</li>
          <li>password</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>POST</td>
      <td >api/auth/register</td>
      <td >
        <ul>
          <li>username</li>
          <li>password</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<br/>

---

<br/>
<table>
  <tbody>
    <tr>
      <th>User</th>
      <th ></th>
      <th ></th>
      <th ></th>
      <th ></th>
    </tr>
    <tr>
      <td>PUT</td>
      <td >api/users/:id</td>
      <td >
        <ul>
          <li>id (url)</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>username</li>
          <li>password</li>
          <li>picture</li>
          <li>description</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td >api/users/:id</td>
      <td >
        <ul>
          <li>id (url)</li>
        </ul>
      </td>
      <td >
      </td>
      <td >
      </td>
    </tr>
  </tbody>
</table>
<br/>

---

<br/>
<table>
  <tbody>
    <tr>
      <th>Issues</th>
      <th ></th>
      <th ></th>
      <th ></th>
      <th ></th>
    </tr>
    <tr>
      <td>GET</td>
      <td >api/issues</td>
      <td >
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>GET</td>
      <td >api/issues/:id</td>
      <td >
        <ul>
          <li>id (url)</li>
        </ul>
      </td>
      <td >
      </td>
      <td >
      </td>
    </tr>
    <tr>
      <td>POST</td>
      <td >api/issues</td>
      <td >
        <ul>
          <li>title</li>
          <li>description</li>
          <li>picture</li>
          <li>title</li>
        </ul>
      </td>
      <td >
      </td>
      <td >
      </td>
    </tr>
    <tr>
      <td>PUT</td>
      <td >api/issues/:id</td>
      <td >
        <ul>
          <li>id (url)</li>
        </ul>
      </td>
      <td >
      </td>
      <td >
      </td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td >api/issues/:id</td>
      <td >
        <ul>
          <li>id (url)</li>
        </ul>
      </td>
      <td >
      </td>
      <td >
      </td>
    </tr>
  </tbody>
</table>
