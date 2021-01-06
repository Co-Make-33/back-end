# Co-Make-33

## back-end

<h6>~ Protected - Specific to logged in user</h6>
<h6>** Pending - not yet functional</h6>
<br/>

---

<br/>
<table>
  <tbody>
    <tr>
      <th>Auth</th>
      <th>url</th>
      <th>requires</th>
      <th>description</th>
    </tr>
    <tr>
      <td>POST</td>
      <td >api/auth/register</td>
      <td >
        <ul>
          <li>username</li>
          <li>email</li>
          <li>password</li>
        </ul>
        <td>Register new user</td>
      </td>
    </tr>
    <tr>
      <td>POST</td>
      <td>api/auth/login</td>
      <td>
        <ul>
          <li>username*</li>
          <li>email*</li>
          <li>password</li>
        </ul>
      </td>
      <td>Login user</td>
    </tr>
  </tbody>
</table>
<h6>* OR - choose one</h6>
<br/>

---

<br/>
<table>
  <tbody>
    <tr>
      <th>User</th>
      <th>url</th>
      <th>requires</th>
      <th>returns</th>
      <th>description</th>
    </tr>
    <tr>
      <td>GET</td>
      <td>api/users/info</td>
      <td>
        <ul>
          <li>token</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>id</li>
          <li>username</li>
          <li>email</li>
        </ul>
      </td>
      <td>List all users</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>api/users/info/:id</td>
      <td>
        <ul>
          <li>token</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>id</li>
          <li>username</li>
          <li>email</li>
        </ul>
      </td>
      <td>Specific user info</td>
    </tr>
    <tr>
      <td>PUT ~</td>
      <td>api/users/info</td>
      <td>
        <ul>
          <li>token</li>
          <li>username*</li>
          <li>email*</li>
          <li>password*</li>
          <li>picture* **</li>
          <li>description* **</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>id</li>
          <li>username</li>
          <li>email</li>
        </ul>
      </td>
      <td>Edit logged in user</td>
    </tr>
    <tr>
      <td>DELETE ~</td>
      <td>api/users/info</td>
      <td>
        <ul>
          <li>token</li>
        </ul>
      </td>
      <td>message confirming deletion</td>
      <td>Delete logged in user</td>
    </tr>
    <tr>
      <td>GET ~</td>
      <td>api/users/issues</td>
      <td>
        <ul>
          <li>token</li>
        </ul>
      </td>
      <td>list of user specific issues</td>
      <td>List logged in users issues</td>
    </tr>
  </tbody>
</table>
<h6>* Optional - Choose which change(s) to make</h6>
<br/>

---

<br/>
<table>
  <tbody>
    <tr>
      <th>Issues</th>
      <th>url</th>
      <th>requires</th>
      <th>returns</th>
      <th>description</th>
    </tr>
    <tr>
      <td>GET</td>
      <td>api/issues</td>
      <td>
        <ul>
          <li>token</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>id</li>
          <li>title</li>
          <li>description</li>
          <li>date_created</li>
          <li>resolved_status</li>
          <li>user_id</li>
          <li>username</li>
        </ul>
      </td>
      <td>List all issues</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>api/issues/:id</td>
      <td>
        <ul>
          <li>token</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>id</li>
          <li>title</li>
          <li>description</li>
          <li>date_created</li>
          <li>resolved_status</li>
          <li>user_id</li>
          <li>username</li>
        </ul>
      </td>
      <td>Specifi Issue Info</td>
    </tr>
    <tr>
      <td>POST ~</td>
      <td>api/issues</td>
      <td>
        <ul>
          <li>token</li>
          <li>title</li>
          <li>description</li>
          <li>picture* **</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>id</li>
          <li>title</li>
          <li>description</li>
          <li>date_created</li>
          <li>resolved_status</li>
          <li>user_id</li>
          <li>username</li>
        </ul>
      </td>
      <td>Create new issue</td>
    </tr>
    <tr>
      <td>PUT ~</td>
      <td>api/issues/:id</td>
      <td>
        <ul>
          <li>token</li>
          <li>title*</li>
          <li>description*</li>
          <li>picture* **</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>id</li>
          <li>title</li>
          <li>description</li>
          <li>date_created</li>
          <li>resolved_status</li>
          <li>user_id</li>
          <li>username</li>
        </ul>
      </td>
      <td>Edit specific issue</td>
    </tr>
    <tr>
      <td>DELETE ~</td>
      <td>api/issues/:id</td>
      <td>
        <ul>
          <li>token</li>
        </ul>
      </td>
      <td>message confirming deletion</td>
      <td>Delete specific issue</td>
    </tr>
  </tbody>
</table>
<h6>* Optional - Choose which change(s) to make</h6>
<br/>

---

<br/>
<table>
  <tbody>
    <tr>
      <th>Votes/Comments</th>
      <th>url</th>
      <th>requires</th>
      <th>returns</th>
      <th>description</th>
    </tr>
    <tr>
      <td>GET</td>
      <td>api/issues/:id/vote</td>
      <td></td>
      <td></td>
      <td>Vote totals for issue</td>
    </tr>
    <tr>
    <tr>
      <td>POST</td>
      <td>api/issues/:id/vote</td>
      <td>
        <ul>
          <li>token</li>
          <li>upvote (1)</li>
          <li>downvote (-1)</li>
          <li>issue id</li>
        </ul>
      </td>
      <td></td>
      <td>Vote on issue</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>api/issues/:id/comment</td>
      <td></td>
      <td></td>
      <td>List all comments for issues</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>api/issues/:id/comment</td>
      <td>
        <ul>
          <li>token</li>
          <li>comment</li>
          <li>issue id</li>
        </ul>
      </td>
      <td></td>
      <td>Comment on issue</td>
    </tr>
  </tbody>
</table>
