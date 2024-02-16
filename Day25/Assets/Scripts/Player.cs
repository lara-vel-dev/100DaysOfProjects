using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    // Global variables
    private Vector2 targetPosotion;
    public float Xincrement;
    public float Yincrement;
    public float speed;
    public float maxHeight;
    public float minHeight;
    public int health;


    // Update is called once per frame
    void Update()
    {
        // Updates position
        transform.position = Vector2.MoveTowards(transform.position, targetPosotion, speed * Time.deltaTime);

        if ((Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.W)) && transform.position.y < maxHeight)
        {
            targetPosotion = new Vector2(transform.position.x, transform.position.y + Yincrement);

        } else if ((Input.GetKeyDown(KeyCode.DownArrow) || Input.GetKeyDown(KeyCode.S)) && transform.position.y > minHeight)
        {
            targetPosotion = new Vector2(transform.position.x, transform.position.y - Yincrement);

        } else if ((Input.GetKeyDown(KeyCode.RightArrow) || Input.GetKeyDown(KeyCode.D)))
        {
            targetPosotion = new Vector2(transform.position.x + Xincrement, transform.position.y);

        } else if ((Input.GetKeyDown(KeyCode.LeftArrow) || Input.GetKeyDown(KeyCode.A)))
        {
            targetPosotion = new Vector2(transform.position.x - Xincrement, transform.position.y);
        }
    }
}
